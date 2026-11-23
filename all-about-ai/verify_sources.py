"""Check the book's public citations. Uses only Python's standard library."""
import argparse
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timezone
from email.utils import parsedate_to_datetime
from hashlib import sha256
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import time
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qsl, urldefrag, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

BOOK = Path(__file__).resolve().parent
USER_AGENT = 'AllAboutAI-DocumentationChecker/1.0 (public book citation review)'
MAX_BYTES = 12 * 1024 * 1024
SECRET_FIELDS = re.compile(r'token|secret|credential|signature|password|assertion|^code$|^state$|^key$|^sig$|session', re.I)


def public_url(url):
    parts = urlsplit(url)
    if parts.scheme not in ('http', 'https') or not parts.hostname or parts.username or parts.password:
        raise ValueError('Unsupported public URL')
    # Never store transient sign-in parameters or request them from a redirect.
    pairs = parse_qsl(parts.query, keep_blank_values=True)
    if any(SECRET_FIELDS.search(key) for key, _ in pairs):
        raise ValueError('Credential-like URL parameter omitted')
    return urldefrag(url)[0]


def report_url(url):
    try:
        return public_url(url)
    except ValueError:
        parts = urlsplit(url)
        return urlunsplit((parts.scheme, parts.hostname or '', parts.path, '', ''))


class RestrictedRedirect(Exception):
    def __init__(self, status, target):
        self.status = status
        self.target = report_url(target)


class PublicRedirect(HTTPRedirectHandler):
    # Older supported Python versions do not map HTTP 308 to the redirect handler.
    http_error_308 = HTTPRedirectHandler.http_error_302

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        try:
            public_url(newurl)
        except ValueError:
            fp.close()
            raise RestrictedRedirect(code, newurl) from None
        return super().redirect_request(req, fp, 301 if code == 308 else code, msg, headers, newurl)


class VisibleText(HTMLParser):
    """Prefer the article or main text; exclude scripts, navigation and hidden subtrees."""
    void = set('area base br col embed hr img input link meta param source track wbr'.split())
    skip = set('script style noscript template svg head nav footer'.split())

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.body_text = []
        self.main_text = []
        self.title_text = []

    def handle_starttag(self, tag, attrs):
        if tag in self.void:
            return
        attrs = dict(attrs)
        _, hidden, main = self.stack[-1] if self.stack else ('', False, False)
        invisible = 'hidden' in attrs or attrs.get('aria-hidden') == 'true' or re.search(
            r'(?:display\s*:\s*none|visibility\s*:\s*hidden)', attrs.get('style') or '', re.I)
        self.stack.append((tag, bool(hidden or tag in self.skip or invisible),
                           main or tag in ('main', 'article') or attrs.get('role') == 'main'))

    def handle_startendtag(self, tag, attrs):
        if tag not in self.void:
            self.handle_starttag(tag, attrs)
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, text):
        if not text.strip():
            return
        tag, hidden, main = self.stack[-1] if self.stack else ('', False, False)
        if tag == 'title':
            self.title_text.append(text)
        if not hidden:
            self.body_text.append(text)
            if main:
                self.main_text.append(text)

    def visible(self):
        return ' '.join(' '.join(self.main_text or self.body_text).split())


def cite(mapping, url, pages):
    if isinstance(url, str) and url.startswith(('https://','http://')):
        public_url(url)
        mapping[url].update(pages)


def walk(value):
    yield value
    if isinstance(value, list):
        for item in value:
            yield from walk(item)
    elif isinstance(value, dict):
        for item in value.values():
            yield from walk(item)


def collect(book):
    mapping = defaultdict(set)
    titles = {}
    catalog = json.loads((book/'content/models.json').read_text())
    model_pages = defaultdict(set)
    groups = json.loads((book/'edition.json').read_text())['groups']
    items = {}
    for g in groups:
        for page in json.loads((book/'content'/g['file']).read_text()):
            items[page['id']] = page
            titles[page['id']] = page['title']
    def visit(obj, pages):
        for node in walk(obj):
            if isinstance(node, dict):
                for _, url in node.get('sources', []):
                    cite(mapping, url, pages)
                cite(mapping, node.get('source'), pages)
            elif isinstance(node, str):
                for key in re.findall(r'\{\{model\.([a-z0-9.-]+)\}\}', node):
                    model_pages[key].update(pages)
    for key, item in items.items():
        visit(item, [key])
    for entry in json.loads((book/'content/worked.json').read_text()):
        visit(entry, [entry['id']])
    for fig in json.loads((book/'content/figures.json').read_text()):
        visit(fig, [fig['lesson'], *fig.get('also', [])])
    titles['model-catalog'] = 'Model catalog'
    for key, item in catalog['values'].items():
        cite(mapping, item['source'], model_pages[key] or ['model-catalog'])
    # Catch sources in ancillary or future content files as well.
    for path in (book/'content').glob('*.json'):
        if path.name in {g['file'] for g in groups} | {'models.json','figures.json','worked.json'}:
            continue
        titles[path.stem] = path.stem
        visit(json.loads(path.read_text()), [path.stem])
    return mapping, titles


def fetch(url, timeout):
    result = dict(status=None, final=url, hash=None, outcome='unreachable')
    request = Request(url, headers={'User-Agent':USER_AGENT, 'Accept':'text/html,text/plain;q=0.9,*/*;q=0.5'})
    retry = 0.
    try:
        with build_opener(PublicRedirect()).open(request, timeout=timeout) as response:
            result.update(status=response.status, final=report_url(response.geturl()))
            content_type = response.headers.get_content_type()
            if content_type not in ('text/html','application/xhtml+xml','text/plain','text/markdown'):
                result['outcome'] = 'non-text resource'
                return result, retry
            data = response.read(MAX_BYTES + 1)
            if len(data) > MAX_BYTES:
                result['outcome'] = 'larger than read limit'
                return result, retry
            text = data.decode(response.headers.get_content_charset() or 'utf-8', errors='replace')
            if 'html' in content_type:
                html = VisibleText()
                html.feed(text)
                html.close()
                text = html.visible()
                title = ' '.join(html.title_text).lower()
                if re.search(r'just a moment|verify you are human|access denied|sign in to your account|sign in - google accounts', title):
                    result['outcome'] = 'access or sign-in screen'
                    return result, retry
            else:
                text = ' '.join(text.split())
            if len(text) < 80:
                result['outcome'] = 'insufficient readable text'
            else:
                result.update(hash=sha256(text.encode()).hexdigest(), outcome='readable')
    except RestrictedRedirect as err:
        result.update(status=err.status, final=err.target, outcome='sign-in or restricted redirect')
    except HTTPError as err:
        result.update(status=err.code, final=report_url(err.geturl()), outcome=(
            'dead link' if err.code in (404,410) else 'blocked' if err.code in (401,403,429,451) else 'HTTP error'))
        value = err.headers.get('Retry-After')
        if value:
            try:
                retry = float(value) if value.isdigit() else (parsedate_to_datetime(value)-datetime.now(timezone.utc)).total_seconds()
            except (ValueError, OverflowError, TypeError):
                retry = 60
        elif err.code == 429:
            retry = 60
        err.close()
    except (OSError, ValueError, URLError, LookupError, EOFError):
        # URLs and exception messages can contain temporary sign-in details.
        pass
    return result, max(0,retry)


def compare(found, old):
    previous = old.get('lastGoodHash') or old.get('hash')
    hash_now = found['hash']
    found['lastGoodHash'] = hash_now or previous
    issues = []
    if found['outcome'] != 'readable':
        issues.append(found['outcome'])
    if previous and hash_now and hash_now != previous:
        issues.append('visible text changed')
    return issues


def audit(mapping, baseline, delay, timeout):
    hosts = defaultdict(list)
    citations = defaultdict(list)
    for source in sorted(mapping):
        resource = public_url(source)
        if resource not in citations:
            hosts[urlsplit(resource).hostname].append(resource)
        citations[resource].append(source)
    def check_host(urls):
        rows = []
        for i, url in enumerate(urls):
            result, retry = fetch(url, timeout)
            rows.append((url,result))
            if i + 1 == len(urls):
                break
            if retry > 30:
                for rest in urls[i+1:]:
                    rows.append((rest,dict(status=None,final=rest,hash=None,outcome='deferred after Retry-After')))
                break
            time.sleep(max(delay,retry))
        return rows
    current = {}
    findings = defaultdict(list)
    with ThreadPoolExecutor(max_workers=5) as pool:
        for rows in pool.map(check_host, sorted(hosts.values(),key=len,reverse=True)):
            for resource, result in rows:
                for url in citations[resource]:
                    found = dict(result)
                    flags = compare(found, baseline.get(url, {}))
                    if found['final'] != resource:
                        flags.append('redirect')
                    current[url] = found
                    if flags:
                        for key in mapping[url]:
                            findings[key].append((url,flags))
    return current, findings


def atomic_text(path, body):
    new = path.with_name(path.name+'.tmp')
    new.write_text(body,encoding='utf-8')
    new.replace(path)


def report(day, titles, current, findings, baseline):
    lines = ['# Source review · '+day,'',f'{len(current)} unique web addresses checked or accounted for. '
             +f'{sum(v["outcome"]=="readable" for v in current.values())} returned readable text. '
             +f'{sum(bool(v.get("lastGoodHash")) for v in baseline.values())} prior fingerprints were available.','',
             'A fingerprint measures the readable page text. Open the source to decide whether a product claim changed. '
             'An access or server failure is not proof that a feature disappeared. The snapshot keeps the last good fingerprint.','']
    for key in sorted(findings,key=lambda k:(titles[k].casefold(),k)):
        lines.extend(['## '+titles[key]+' ('+key+')',''])
        for url, flags in sorted(findings[key]):
            r = current[url]
            dest = ' → <'+r['final']+'>' if r['final']!=public_url(url) else ''
            lines.append('- '+', '.join(flags)+' · HTTP '+str(r['status'] or 'unavailable')+' · <'+url+'>'+dest)
        lines.append('')
    if not findings:
        lines.append('No changes or access problems found.')
    return '\n'.join(lines).rstrip()+'\n'


def record(book, day, findings, titles):
    from review_history import apply_changes, change_list
    desk = book/'content/reference-desk.json'
    pages = json.loads(desk.read_text())
    entries = change_list(pages)
    additions = []
    valid = {p['id'] for g in json.loads((book/'edition.json').read_text())['groups']
             for p in json.loads((book/'content'/g['file']).read_text())}
    for page, notes in sorted(findings.items()):
        kinds = sorted({flag for _,flags in notes for flag in flags})
        if not kinds:
            continue
        target = page if page in valid else 'reference-changes'
        text = f'{titles[page]}: {len(notes)} cited address(es) to review. '+', '.join(kinds)+'. See the dated local verification report.'
        entry = dict(date=day,where=target,kind='source check',what=text)
        if entry not in entries:
            additions.append(entry)
    if not additions:
        return
    entries.extend(additions)
    manifest = book/'edition.json'
    ed = json.loads(manifest.read_text())
    ed['reviewed'] = max(ed['reviewed'],day)
    apply_changes(book,{desk:pages,manifest:ed})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--work-dir', type=Path, default=BOOK.parent.parent/'_work',
                        help='snapshot and report folder outside the hosted Site')
    parser.add_argument('--record',action='store_true',help='explicitly add source notices to What changed; does not verify product facts')
    parser.add_argument('--delay',type=float,default=1.0,help='minimum seconds between requests to the same host (at least 0.5)')
    parser.add_argument('--timeout',type=float,default=15,help='network timeout in seconds (1 to 60)')
    args = parser.parse_args()
    if not 0.5 <= args.delay <= 300 or not 1 <= args.timeout <= 60:
        parser.error('Choose a delay of 0.5 to 300 seconds and a timeout of 1 to 60 seconds.')
    work = args.work_dir.resolve()
    if BOOK.parent == work or BOOK.parent in work.parents:
        parser.error('Keep the work folder outside Site.')
    work.mkdir(exist_ok=True,parents=True)
    snapshot = work/'source-snapshots.json'
    previous = json.loads(snapshot.read_text()) if snapshot.exists() else {}
    day = date.today().isoformat()
    mapping,titles = collect(BOOK)
    baseline = previous.get('sources',{})
    current,findings = audit(mapping, baseline, args.delay, args.timeout)
    # Keep the first comparison's findings when running a second check on the same day.
    # This lets an owner review the report and later choose --record without losing a change.
    if previous.get('date') == day:
        for url in current:
            if previous.get('sources',{}).get(url,{}).get('changedOn') == day:
                for key in mapping[url]:
                    notes = dict(findings[key])
                    flags = notes.setdefault(url,[])
                    if 'visible text changed' not in flags:
                        flags.append('visible text changed')
                    findings[key] = list(notes.items())
    for notes in findings.values():
        for url,flags in notes:
            if 'visible text changed' in flags:
                current[url]['changedOn'] = day
    data = dict(format=1,date=day,sources=current)
    target = work/('verify-report-'+day+'.md')
    atomic_text(target, report(day,titles,current,findings,baseline))
    atomic_text(snapshot,json.dumps(data,ensure_ascii=False,indent=2,sort_keys=True)+'\n')
    if args.record:
        record(BOOK,day,findings,titles)
    print(f'{len(current)} URLs; {sum(r["outcome"]=="readable" for r in current.values())} readable. See {target.name}.')


if __name__ == '__main__':
    main()

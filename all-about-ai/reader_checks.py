"""Check strings that reach a reader, with the same catalog order as reader.js."""
from html.parser import HTMLParser
import re
from xml.etree import ElementTree

TRUST = re.compile(
    r'\b(?:ai[\s\-‑–]+drafted|(?:not[ -]+human[ -]+verified|unverified by a human)|'
    r'human review pending|draft record|page review|review[ -]basis badge|'
    r'source-read|human[ -]tested|human test recorded|verification basis)\b', re.I)
# A plain use such as “draft an email” is a lesson, not an edition status.
TRUST_STATUS = re.compile(
    r'(?:^(?:draft|page review)$|(?:^|[·|])\s*draft\s*(?:$|[·|])|'
    r'\b(?:review status|edition status|page status|status badge)\s*[:=–-]\s*draft\b|'
    r'\bedition\s+\d+\s*[(·–-]\s*draft\b)', re.I)
CATALOG = {kind: re.compile(r'\{\{'+kind+r'\.([a-z0-9.-]+)\}\}') for kind in ('fact','model')}

def expand_catalogs(text, facts, models):
    text = CATALOG['fact'].sub(lambda m:facts[m[1]]['value'], text)
    return CATALOG['model'].sub(lambda m:models[m[1]]['text'], text)

def check_public_text(text, where):
    if TRUST.search(text) or TRUST_STATUS.search(text.strip()):
        raise ValueError('Remove the trust label from '+where)
    if '{{' in text:
        raise ValueError('Unresolved reader field in '+where+': '+text[:100])

def displayed(value):
    if isinstance(value,str):
        yield value
    elif isinstance(value,list):
        for item in value:
            yield from displayed(item)
    elif isinstance(value,dict):
        for key,item in value.items():
            if key not in {'basis','verificationBasis','caseTerm'}:
                yield from displayed(item)

class VisibleHTML(HTMLParser):
    def __init__(self, where):
        super().__init__()
        self.where = where
        self.hidden_tag = None
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style'):
            self.hidden_tag = tag
        for key,value in attrs:
            if key in ('title','alt','aria-label','placeholder') and value:
                check_public_text(value, self.where)
    def handle_endtag(self, tag):
        if tag == self.hidden_tag:
            self.hidden_tag = None
    def handle_data(self, data):
        if not self.hidden_tag:
            check_public_text(data, self.where)

def check_html(text, where):
    parser = VisibleHTML(where)
    parser.feed(text)
    parser.close()

def validate_reader(book, manifest, pages, examples, figures, facts, models, cases):
    def rendered(value, where):
        for text in displayed(value):
            check_public_text(expand_catalogs(text, facts, models),where)
    # Worked chapter fields are expanded in update_edition before this pass.
    for page in pages.values():
        rendered(page,page['id'])
    for example in examples:
        row = dict(example)
        if 'buildPrompt' in row:
            row['buildPrompt'] = pages[row['id']]['prompt']
        rendered(row,row['id']+' worked example')
    for collection, name in [(manifest,'edition'),(figures,'figure'),(list(facts.values()),'fact'),
                             (list(models.values()),'model'),(cases,'practice file list')]:
        rendered(collection,name)
    for path in [book/'index.html',*(book/'practice/browser').glob('*.html')]:
        check_html(path.read_text(),path.name)
    for path in (book/'pictures').glob('*.svg'):
        for line in ElementTree.parse(path).getroot().itertext():
            check_public_text(line,path.name)
    for row in cases:
        path=book/'practice/exchange-inventory/cases'/row['file']
        check_public_text(path.read_text(),row['file'])
    for filename in ('reader.js','guides.js'):
        code=(book/filename).read_text()
        if '{{' in code:
            raise ValueError('Unexpected literal reader field in '+filename)
        if TRUST.search(code) or TRUST_STATUS.search(code) or re.search(r"""(?:element\(\s*['"][\w-]+['"]\s*,|\.textContent\s*=)\s*['"]draft['"]""",code,re.I):
            raise ValueError('Remove visible trust wording in '+filename)
    for path in [book/'UPDATING.md',*(book/'practice').rglob('README.md')]:
        if TRUST.search(path.read_text()):
            raise ValueError('Remove visible trust wording in '+path.name)

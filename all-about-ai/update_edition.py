"""Validate the chapter files and refresh the bookshelf's offline edition."""
import argparse
from datetime import date
from hashlib import sha256
import io
import json
from pathlib import Path
import re
import subprocess
import sys
from xml.etree import ElementTree
from urllib.parse import urlsplit
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

book = Path(__file__).resolve().parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--check', action='store_true', help='check without writing')
args = parser.parse_args()


def require(value, message):
    if not value:
        raise SystemExit(message)


def words(values):
    return isinstance(values, list) and values and all(isinstance(v, str) and v.strip() for v in values)


def check_sample_text(value, path):
    """Reject personal contact details or device paths accidentally pasted into book files."""
    for match in re.finditer(r'[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[A-Za-z]{2,})', value):
        host = match[1].lower()
        require(host.endswith(('.test', '.invalid')) or host in {'example.org','example.net','example.com'}, f'Use a made-up email address in {path}')
    require(not re.search(r'(?:/Users/|C:\\Users\\|/home/)[A-Za-z0-9._-]+', value, re.I), f'Remove the personal home folder in {path}')
    require(not re.search(r'(?<![\w.-])(?:\+1[-. ]?)?\(\d{3}\)[-. ]*\d{3}[-. ]\d{4}\b', value), f'Remove the personal phone number in {path}')


def check_sources(sources, key):
    require(sources, f'Missing sources in {key}')
    for label, link in sources:
        url = urlsplit(link)
        require(label and url.scheme == 'https' and url.hostname, f'Invalid source in {key}')


def check_lab(lab, track, number):
    key = lab['id']
    require(key == f'lab-{track}-{number:02}', f'Unexpected lab order for {key}')
    require(words([lab[k] for k in ('level', 'requires', 'features', 'prompt')]), f'Incomplete brief in {key}')
    levels = ['Starter'] * 3 + ['Intermediate'] * 4 + ['Advanced'] * 3 + ['Expert'] * 5
    new_block = ['Starter'] * 6 + ['Intermediate'] * 7 + ['Advanced','Expert']
    levels = (new_block if track == 'gemini-app' else levels) + new_block
    require(number <= len(levels) and lab['level'] == levels[number - 1], f'Unexpected level in {key}')
    require(words(lab['roles']) and len(lab['roles']) == 3, f'Check roles in {key}')
    require(len(lab['steps']) >= 3 and words(lab['check']), f'Incomplete walkthrough in {key}')
    for step in lab['steps']:
        require(words([step[k] for k in ('title', 'text', 'help')]), f'Step missing guidance in {key}')
        if 'code' in step:
            require(words([step['code']]), f'Empty example in {key}')
    check_sources(lab['sources'],key)


def refresh_kit(folder):
    # Fixed file order and metadata make identical kits produce identical editions.
    for name in ('mailboxes.csv', 'Test-Inventory.ps1', 'Reference/Get-MailboxInventory.ps1', 'README.md'):
        require((folder / name).is_file(), f'Missing practice file {name}')
    packed = io.BytesIO()
    with ZipFile(packed, 'w') as archive:
        for source in sorted(folder.rglob('*')):
            if source.is_file() and not any(p.startswith('.') for p in source.relative_to(folder).parts):
                info = ZipInfo((Path(folder.name) / source.relative_to(folder)).as_posix())
                info.compress_type = ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                archive.writestr(info, source.read_bytes())
    output = folder.with_suffix('.zip')
    if not output.exists() or packed.getvalue() != output.read_bytes():
        require(not args.check, f'Run update_edition.py to refresh {output.name}')
        output.write_bytes(packed.getvalue())
    return output.relative_to(book).as_posix()


manifest = json.loads((book / 'edition.json').read_text())
edition_date = date.fromisoformat(manifest['reviewed'])
groups = manifest['groups']
ids = set()
assets = ['index.html', 'reader.css', 'reader.js', 'guides.js', 'guide.css', 'content/figures.json', 'content/worked.json', 'content/models.json', 'edition.json', '../book-pager.js', '../shelf-art/all-about-ai.jpg']
kit = refresh_kit(book / 'practice' / 'exchange-inventory')
assets.append(kit)
lab_count = 0
guide_ids = set()
reference_ids = set()
require(groups, 'List at least one group in edition.json.')
for group in groups:
    require(group['title'] and date.fromisoformat(group['reviewed']) <= edition_date, 'Check group title and review date.')
    require(re.fullmatch(r'[a-z0-9-]+\.json', group['file']), 'Use a plain JSON filename for each group.')
    path = 'content/' + group['file']
    require(path not in assets, f'Duplicate group file {path}')
    assets.append(path)
    chapters = json.loads((book / path).read_text())
    require(chapters, f'Empty group {path}')
    if group.get('track'):
        require(words([group['startLabel'],group['gettingStarted']]) and urlsplit(group['startUrl']).scheme == 'https', f'Check setup help in {path}')
        require(len(chapters) == 30, f'Expected 30 labs in {path}')
    for number, ch in enumerate(chapters, start=1):
        key = ch['id']
        require(re.fullmatch(r'[a-z0-9-]+', key) and key not in ('contents', 'labs', 'start') and key not in ids, f'Invalid or duplicate ID {key}')
        ids.add(key)
        require(words([ch['title'], ch['summary']]), f'Incomplete page {key}')
        if group.get('guide'):
            require(words(ch['where']) and words(ch['roles']) and len(ch['roles']) == 3, f'Check setup and roles in {key}')
            require(len(ch['actions']) >= 4 and ch['topic'], f'Incomplete guide {key}')
            for step in ch['actions']:
                require(words([step[k] for k in ('title','do','see','stuck')]), f'Missing walkthrough in {key}')
            check_sources(ch['sources'],key)
            guide_ids.add(key)
            continue
        if group.get('track'):
            check_lab(ch, group['track'], number)
            require('kit' not in ch or ch['kit'] == kit, f'Unknown kit in {key}')
            if 'sampleApp' in ch:
                sample = ch['sampleApp']
                require(re.fullmatch(r'practice/browser/[a-z0-9-]+\.html',sample) and (book/sample).is_file(), f'Unknown app in {key}')
                if sample not in assets: assets.append(sample)
            lab_count += 1
            continue
        reference_ids.add(key)
        require(ch['sections'], f'Incomplete chapter {key}')
        intro = ch['intro']
        require(words([intro[k] for k in ('what', 'features', 'exchange', 'm365', 'developer')]) and intro['sources'], f'Incomplete introduction in {key}')
        for label, link in intro['sources']:
            require(label and urlsplit(link).scheme == 'https' and urlsplit(link).hostname, f'Invalid introduction source in {key}')
        for section in ch['sections']:
            require(section['title'] and words(section['paragraphs']) and section['sources'], f'Incomplete section in {key}')
            for label, link in section['sources']:
                url = urlsplit(link)
                require(label and url.scheme == 'https' and url.hostname, f'Invalid source in {key}')
            if 'exercise' in section:
                exercise = section['exercise']
                require(words([exercise['prompt']]) and words(exercise['answer']), f'Incomplete exercise in {key}')
                for question in exercise.get('questions', []):
                    choices = question['choices']
                    require(words([question['prompt'], question['why']]) and words(choices) and
                            len(set(choices)) == len(choices) >= 2 and type(question['correct']) is int and
                            0 <= question['correct'] < len(choices), f'Invalid practice choice in {key}')
            if 'table' in section:
                tbl = section['table']
                require(words(tbl['columns']) and tbl['rows'], f'Empty table in {key}')
                require(all(words(row) and len(row) == len(tbl['columns']) for row in tbl['rows']), f'Invalid table in {key}')

tracks = [group['track'] for group in groups if group.get('track')]
expected_tracks = {'antigravity','ai-studio','claude-code','codex','copilot','devin','gemini-app'}
require(set(tracks) == expected_tracks and len(tracks) == 7 and lab_count == 210, 'Expected seven distinct tracks of 30 labs')
require(manifest.get('version') == 4, 'Expected edition 4')
catalog = json.loads((book / 'content/models.json').read_text())
require(date.fromisoformat(catalog['reviewed']) <= edition_date, 'Check model catalog date')
values = catalog['values']
require(values, 'Empty model catalog')
for field, entry in values.items():
    require(re.fullmatch(r'[a-z0-9.-]+',field) and words([entry['text']]), f'Invalid model field {field}')
    check_sources([[field,entry['source']]],field)
used = set()
def check_refs(value):
    if isinstance(value, str):
        def take(match):
            field = match[1]
            require(field in values, f'Unknown model field {field}')
            used.add(field)
            return values[field]['text']
        clean = re.sub(r'\{\{model\.([a-z0-9.-]+)\}\}',take,value)
        require('{{model.' not in clean, 'Unresolved model field')
    elif isinstance(value, list):
        for item in value: check_refs(item)
    elif isinstance(value, dict):
        for item in value.values(): check_refs(item)
def strings_in_content(value):
    if isinstance(value, str):
        if not value.startswith('https://'): yield value
    elif isinstance(value, list):
        for item in value: yield from strings_in_content(item)
    elif isinstance(value, dict):
        for key,item in value.items():
            if key not in {'id','sources'}: yield from strings_in_content(item)

model_groups = {'gemini.json','claude.json','chatgpt.json','other-tools.json','field-comparisons.json'}
fixed_fields = {entry['text'] for key,entry in values.items()
                if key.endswith('.id') or (key.endswith('.name') and re.search(r'\d',entry['text']))}
for group in groups:
    rows = json.loads((book/'content'/group['file']).read_text())
    for item in rows:
        require('firstGuide' not in item or item['firstGuide'] in guide_ids, 'Invalid first lesson for '+item['id'])
    if group['file'] in model_groups:
        for line in strings_in_content(rows):
            without_refs = re.sub(r'\{\{model\.[a-z0-9.-]+\}\}', '', line)
            require(not any(term.lower() in without_refs.lower() for term in fixed_fields), 'Move the model name or API ID into the catalog in '+group['file'])
            require(not re.search(r'\$\d+(?:\.\d+)?\s+(?:in|out)\b|(?:limit(?: is| of)?|up to|maximum|window of)\s+[0-9][0-9,]*\s+(?:million\s+)?(?:input |output )?tokens\b',without_refs,re.I), 'Use a catalog field for model limits or token rates in '+group['file'])
    check_refs(rows)
examples = json.loads((book / 'content/worked.json').read_text())
require(len(examples) == len(ids - guide_ids) and {ex['id'] for ex in examples} == ids - guide_ids, 'Every reference and lab needs its own worked example')
for ex in examples:
    require(words([ex[k] for k in ('premise','before','try','after','why','rescue')]), 'Incomplete worked example '+ex['id'])
check_refs(examples)
figures = json.loads((book / 'content/figures.json').read_text())
check_refs(figures)
require(used == set(values), 'Unused model fields: ' + ', '.join(sorted(set(values)-used)))
previous_diagrams = """
    tokens-context chat-project-agent vibe-coding-loop model-picker structured-json tool-calling
    offline-pwa cost-per-win diff-review notebook-grounding deep-research m365-grounding
    exchange-pipeline git-branch-pr pagination-loop zero-vs-blank
""".split()
new_diagrams = """
    devin-speed-modes blueprint-snapshot session-side-chat devin-review-flow skill-reuse
    ticket-to-session access-four-scopes outposts-network fleet-pilot acu-metrics
    gemini-surfaces notebook-studio ai-studio-pipeline multimodal-io mindmap-connections quiz-from-notes
    claude-surfaces plan-then-edit connector-vs-browser svg-vs-raster effort-dial search-vs-analysis
    local-vs-cloud-codex media-handoff thread-to-decision denominator-trap copilot-surface-choice
    claim-to-source browser-permissions local-offline-ai blind-model-trial game-state-loop
    undo-history-stack fifo-queue atomic-file-swap csv-quote-shield
""".split()
new_svg_files = {f'diagram-{name}.svg' for name in new_diagrams}
diagrams = new_svg_files | {f'diagram-{name}.svg' for name in previous_diagrams}
require(len(figures) == 93 and {f['file'] for f in figures if f['file'].endswith('.svg')} == diagrams,
        'Expected the 52 named diagrams and 41 other pictures')
illustrated = {page for figure in figures for page in [figure['lesson'], *figure.get('also', [])]}
milestones = {f'lab-{track}-{number}' for track in tracks for number in ('01', '15', '29', '30')}
required_pages = reference_ids | milestones | {'lab-gemini-app-10','lab-gemini-app-24','lab-gemini-app-27'}
require(required_pages <= illustrated, 'Missing figures on ' + ', '.join(sorted(required_pages - illustrated)))
require({p.name for p in (book/'pictures').glob('*') if p.is_file() and not p.name.startswith('.')} == {f['file'] for f in figures}, 'Picture list does not match files on disk')
for fig in figures:
    name = fig['file']
    require(re.fullmatch(r'[a-z0-9-]+\.(webp|svg)', name), f'Invalid picture name {name}')
    path = 'pictures/' + name
    require(fig['lesson'] in ids and path not in assets and words([fig['credit'], fig['caption'], fig['alt']]), f'Check picture {name}')
    related = fig.get('also', [])
    require(set(related) <= ids and len(set([fig['lesson'],*related])) == len(related) + 1, f'Unknown or duplicate figure target in {name}')
    if fig['source'].startswith('#'):
        require(fig['source'][1:] in ids, f'Unknown local figure source {name}')
    else:
        check_sources([[fig['credit'], fig['source']]],name)
    if name in diagrams:
        svg = ElementTree.parse(book / path).getroot()
        ns = '{http://www.w3.org/2000/svg}'
        if name in new_svg_files:
            colors = {el.get(attr) for el in svg.iter() for attr in ('fill', 'stroke')
                      if el.get(attr) not in (None, 'none')}
            require(colors == {'#faf6ea', '#182c2d', '#145756', '#8b571b'}, f'Check the book palette in {name}')
        require(svg.tag == ns+'svg' and svg.get('viewBox') and svg.findtext(ns+'title') and svg.findtext(ns+'desc'), f'Diagram needs a title and description: {name}')
        require(all(el.tag in {ns+t for t in ('svg','title','desc','defs','marker','rect','text','path')} for el in svg.iter()), f'Unexpected SVG element {name}')
    else:
        require((book / path).read_bytes()[8:12] == b'WEBP', f'Invalid WebP {name}')
    assets.append(path)

for path in [*assets, 'UPDATING.md', *[p.relative_to(book).as_posix() for p in (book/'practice/exchange-inventory').rglob('*') if p.is_file()]]:
    if Path(path).suffix in {'.json','.svg','.csv','.md','.ps1','.html','.js','.css'}:
        check_sample_text((book/path).read_text(), path)

digest = sha256()
for path in [*assets, '../table-books-worker.js']:
    digest.update(path.encode() + b'\0' + sha256((book / path).read_bytes()).digest())
edition = 'all-about-ai-' + digest.hexdigest()[:16]
worker = ("// Generated by update_edition.py\nconst edition = " + json.dumps(edition) + ";\nconst files = "
          + json.dumps(assets, indent=2) + ";\nimportScripts('../table-books-worker.js');\n")
shelf_path = book.parent / 'index.html'
shelf, count = re.subn(r'(data-book="all-about-ai" data-edition=")[^"]+(")', rf'\g<1>{edition}\2', shelf_path.read_text())
require(count == 1, 'Expected exactly one All About AI card in the bookshelf.')
for path, expected in [(book / 'sw.js', worker), (shelf_path, shelf)]:
    if not path.exists() or path.read_text() != expected:
        require(not args.check, f'Run update_edition.py to refresh {path.name}')
        path.write_text(expected)
print(f'{len(ids)-lab_count-len(guide_ids)} reference chapters, {lab_count} labs, {len(guide_ids)} beginner lessons, {len(figures)} pictures. {edition}')

subprocess.run([sys.executable, str(book / 'export_book.py'), *(['--check'] if args.check else [])], check=True)

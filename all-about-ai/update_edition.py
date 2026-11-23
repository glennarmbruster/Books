"""Validate the chapter files and refresh the bookshelf's offline edition."""
import argparse
from datetime import date
from hashlib import sha256
import io
import json
from pathlib import Path
import re
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
assets = ['index.html', 'reader.css', 'reader.js', 'guides.js', 'guide.css', 'content/figures.json', 'content/worked.json', 'edition.json', '../book-pager.js', '../shelf-art/all-about-ai.jpg']
kit = refresh_kit(book / 'practice' / 'exchange-inventory')
assets.append(kit)
lab_count = 0
guide_ids = set()
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
        require(len(chapters) == 15, f'Expected 15 labs in {path}')
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
            lab_count += 1
            continue
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
            if 'table' in section:
                tbl = section['table']
                require(words(tbl['columns']) and tbl['rows'], f'Empty table in {key}')
                require(all(words(row) and len(row) == len(tbl['columns']) for row in tbl['rows']), f'Invalid table in {key}')

examples = json.loads((book / 'content/worked.json').read_text())
require(len(examples) == len(ids - guide_ids) and {ex['id'] for ex in examples} == ids - guide_ids, 'Every reference and lab needs its own worked example')
for ex in examples:
    require(words([ex[k] for k in ('premise','before','try','after','why','rescue')]), 'Incomplete worked example '+ex['id'])
figures = json.loads((book / 'content/figures.json').read_text())
for fig in figures:
    name = fig['file']
    require(re.fullmatch(r'[a-z0-9-]+\.webp', name), f'Invalid picture name {name}')
    path = 'pictures/' + name
    require(fig['lesson'] in guide_ids and path not in assets and words([fig['credit'], fig['caption'], fig['alt']]), f'Check picture {name}')
    check_sources([[fig['credit'], fig['source']]],name)
    require((book / path).read_bytes()[8:12] == b'WEBP', f'Invalid WebP {name}')
    assets.append(path)

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

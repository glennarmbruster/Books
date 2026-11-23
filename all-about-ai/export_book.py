"""Build the book-only ZIP, with a standalone HTML reader and an editable site."""
import argparse
import base64
from datetime import date
import io
import json
from pathlib import Path
import re
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

book = Path(__file__).resolve().parent
root = book.parent
output = root / 'downloads' / 'All-About-AI.zip'
cli = argparse.ArgumentParser(description=__doc__)
cli.add_argument('--check', action='store_true')
args = cli.parse_args()
sw = (book / 'sw.js').read_text()
files = json.loads(re.search(r'const files = (\[.*?\]);', sw, re.S)[1])
reviewed = date.fromisoformat(json.loads((book / 'edition.json').read_text())['reviewed'])
edition_id = re.search(r'const edition = "([^"]+)";', sw)[1]


def data_url(path, mime):
    encoded = base64.b64encode(path.read_bytes()).decode()
    return f'data:{mime};base64,{encoded}'


# The portable reader makes no fetch calls. All data and pictures live in the HTML.
bundle = {'json': {}, 'media': {}}
for name in files:
    source = book / name
    if name.endswith('.json'):
        bundle['json']['./' + name] = json.loads(source.read_text())
    elif name.startswith('practice/browser/') and name.endswith('.html'):
        bundle['media']['./' + name] = data_url(source, 'text/html')
    elif name.endswith('.svg'):
        bundle['media']['./' + name] = data_url(source, 'image/svg+xml')
    elif name.endswith('.webp'):
        bundle['media']['./' + name] = data_url(source, 'image/webp')
    elif name.endswith('.zip'):
        bundle['media']['./' + name] = data_url(source, 'application/zip')
html = (book / 'index.html').read_text()
html = html.replace('<a href="../index.html">← Bookshelf</a>', '')
html = re.sub(r'<a class="book-download"[^>]*>.*?</a>', '', html)
html = html.replace('src="../shelf-art/all-about-ai.jpg"', 'src="' + data_url(root / 'shelf-art/all-about-ai.jpg', 'image/jpeg') + '"')
html = re.sub(r'<link rel="stylesheet" href="\./([^"]+)">', lambda m: '<style>\n' + (book / m[1]).read_text() + '\n</style>', html)
scripts = re.findall(r'<script src="([^"]+)" defer></script>', html)
html = re.sub(r'<script src="[^"]+" defer></script>', '', html)
html = re.sub(r'(?m)^[ \t]+$', '', html)
payload = json.dumps(bundle, ensure_ascii=True, separators=(',', ':')).replace('<', r'\u003c')
scripts_text = '<script>window.portableAiBook=' + payload + ';</script>\n'
for script in scripts:
    scripts_text += '<script>\n' + (book / script).read_text() + '\n</script>\n'
html = html.replace('</body>', scripts_text + '</body>')
readme = f"""ALL ABOUT AI

Read on a Mac or Windows PC
Unzip this folder. Open “Read All About AI.html” in Safari, Edge, Chrome or
Firefox. The file contains the whole book, including the pictures and lab kit.
You can read and search it without an account or internet connection.
Working inside one of the vendor tools and opening a source link require internet.

Read on an iPad
For the full interactive reader, open the published edition in Safari while
online. Wait for “Ready offline”, then open it again in airplane mode.
Choose All About AI on your usual Bookshelf.
Files or another ZIP preview app may show a static preview of downloaded HTML.

Editable copy
The Site folder contains this book’s original chapters, lab files, pictures,
and the shared reader files it needs. Serve Site with a local web server and
open /all-about-ai/. The HTML in the top folder is the portable edition.
The illustrated content was reviewed {reviewed:%B %d, %Y}.
"""
archive = io.BytesIO()
with ZipFile(archive, 'w') as z:
    def put(name, data):
        entry = ZipInfo('All About AI/' + name, (reviewed.year, reviewed.month, reviewed.day, 0, 0, 0))
        entry.compress_type = ZIP_DEFLATED
        entry.external_attr = 0o100644 << 16
        z.writestr(entry, data)

    put('Read All About AI.html', html)
    put('Read me.txt', readme)
    dest = { (book / name).resolve() for name in files }
    dest.update(book.rglob('*.py'))
    dest.update(p for p in (book / 'practice').rglob('*') if p.is_file() and all(not part.startswith('.') for part in p.relative_to(book).parts))
    dest.update([book / 'sw.js', book / 'UPDATING.md', root / 'table-books-worker.js'])
    for src in sorted(dest):
        put('Site/' + src.relative_to(root).as_posix(), src.read_bytes())
    # A single-book landing page keeps the shelf link and edition updater usable.
    landing = '<!doctype html><html lang="en"><meta charset="utf-8"><title>All About AI</title><article data-book="all-about-ai" data-edition="' + edition_id + '"><h1>All About AI</h1><a href="./all-about-ai/">Open the book</a></article></html>'
    put('Site/index.html', landing)
reader = book / 'Read All About AI.html'
standalone = html.encode('utf-8')
if args.check:
    if not reader.is_file() or reader.read_bytes() != standalone:
        raise SystemExit('Regenerate Read All About AI.html with update_edition.py')
elif not reader.is_file() or reader.read_bytes() != standalone:
    reader.write_bytes(standalone)
data = archive.getvalue()
if args.check:
    if not output.is_file() or output.read_bytes() != data:
        raise SystemExit('Regenerate the portable edition with export_book.py')
else:
    output.parent.mkdir(exist_ok=True)
    if not output.is_file() or output.read_bytes() != data:
        output.write_bytes(data)
print(f'{output.name} · {len(data):,} bytes · {edition_id}')

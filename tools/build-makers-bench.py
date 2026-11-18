"""Build the iPad offline edition, the desktop shelf book and the portable ZIP."""
import hashlib
import json
import re
import shutil
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "makers-bench"
DESKTOP = ROOT / "makers-bench-desktop"
TOOLS = ROOT / "tools/makers-bench"
ARCHIVE = ROOT / "downloads/makers-bench-desktop.zip"
SHARED = ["book-pager.js", "shelf-art/bench.jpg", "table-books-worker.js"]


def write(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists() or path.read_bytes() != data:
        path.write_bytes(data)


def package(assets, name, worker_path):
    digest = hashlib.sha256()
    for path, data in sorted(assets.items()):
        digest.update(path.encode() + b'\0' + hashlib.sha256(data).digest())
    edition = name + "-" + digest.hexdigest()[:14]
    assets["index.html"] = assets["index.html"].replace(b"@EDITION@", edition.encode())
    files = sorted(assets.keys() - {worker_path})
    assets["sw.js"] = (f"const edition = {json.dumps(edition)};\n"
                       f"const files = {json.dumps(files, indent=2)};\n"
                       f"importScripts({json.dumps(worker_path)});\n").encode()
    return edition


assets = {p.relative_to(SOURCE).as_posix(): p.read_bytes() for p in SOURCE.rglob("*")
          if p.is_file() and p.name not in {"sw.js", ".DS_Store"}}
html = re.sub(r'<body(?: data-edition="[^"]+")?>', '<body data-edition="@EDITION@">',
              assets["index.html"].decode(), count=1)
assert '@EDITION@' in html
assets["index.html"] = html.encode()
ipad = dict(assets)
ipad.update({"../"+p: (ROOT/p).read_bytes() for p in SHARED})
ipad_version = package(ipad, SOURCE.name, "../table-books-worker.js")
for p in ["sw.js", "index.html"]:
    write(SOURCE/p, ipad[p])

desktop = dict(assets)
desktop.update({p: (ROOT/p).read_bytes() for p in SHARED})
for p in ["desktop.css", "desktop.js"]:
    desktop[p] = (TOOLS/p).read_bytes()
desktop_html = (html.replace('<body ', '<body data-desktop="true" ')
                .replace("The Maker’s Bench · Books", "The Maker’s Bench · Desktop")
                .replace('class="wordmark">The Maker’s Bench', 'class="wordmark">The Maker’s Bench · Desktop')
                .replace('../shelf-art/', 'shelf-art/').replace('../book-pager.js','book-pager.js')
                .replace('</head>', '<link rel="stylesheet" href="desktop.css">\n</head>')
                .replace('<script src="app.js">', '<script src="desktop.js"></script><script src="app.js">'))
desktop["manifest.webmanifest"] = (json.dumps(dict(json.loads(assets["manifest.webmanifest"]),
    name="The Maker’s Bench · Desktop", short_name="Bench Desktop"),indent=2)+"\n").encode()
portable = dict(desktop)
portable["index.html"] = desktop_html.replace('<a href="../" class="books">‹ Bookshelf</a>', '').replace(
    '<a href="../">‹ Bookshelf</a>', '<a href="#guide">Field guide</a>').encode()
portable_version = package(portable, "bench-portable", "table-books-worker.js")
portable["README.md"] = (TOOLS/"README-desktop.md").read_bytes()
portable[".nojekyll"] = b""

desktop["index.html"] = desktop_html.replace('<footer>', '<footer><a href="../downloads/makers-bench-desktop.zip" download>Download desktop book (.zip)</a>').encode()
desktop_version = package(desktop, DESKTOP.name, "table-books-worker.js")
for path, data in desktop.items():
    write(DESKTOP/path, data)
# This directory is generated. Drop files removed from the shared source.
for path in DESKTOP.rglob("*"):
    if path.is_file() and path.relative_to(DESKTOP).as_posix() not in desktop:
        path.unlink()

shelf = (ROOT/"index.html").read_text()
for name, version in [(SOURCE.name, ipad_version),(DESKTOP.name,desktop_version)]:
    shelf, count = re.subn(fr'(data-book="{name}" data-edition=")[^"]+',rf'\g<1>{version}',shelf)
    assert count == 1, f"Missing bookshelf card for {name}"
write(ROOT/"index.html",shelf.encode())
ARCHIVE.parent.mkdir(exist_ok=True)
with zipfile.ZipFile(ARCHIVE.with_suffix(".tmp"), "w") as archive:
    for name, data in sorted(portable.items()):
        info = zipfile.ZipInfo(name)
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        archive.writestr(info, data, compress_type=zipfile.ZIP_DEFLATED)
ARCHIVE.with_suffix(".tmp").replace(ARCHIVE)
print(f"Built {ipad_version}, {desktop_version} and {ARCHIVE.name}.")

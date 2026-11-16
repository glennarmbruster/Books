from pathlib import Path
from collections import defaultdict
from html import escape as e
import json,re,base64,zipfile
from xml.etree import ElementTree as ET
from urllib.parse import urlsplit,unquote
import posixpath
from datetime import datetime, timezone
root=Path(__file__).resolve().parents[1]/'field-and-home'
target=root/'Field-and-Home.epub'
man=json.loads((root/'packs/manifest.json').read_text())
packs=[json.loads((root/'packs'/name).read_text()) for name in man['files']]
assert all(pack['version']==man['version'] for pack in packs), 'Pack editions must agree'
bundle={'version':man['version'], 'guides':[g for pack in packs for g in pack['guides']], 'glossary':{}}
for pack in packs:
 bundle['glossary'].update(pack.get('glossary',{}))
(root/'local-edition.js').write_text('window.fieldHomeEdition = '+json.dumps(bundle,ensure_ascii=False,separators=(',',':'))+';\n')
old=json.loads((root/'field-figures.js').read_text().split('const fieldFigures = ')[1].split(';\n')[0])
parts={};items=[];spine=[]
def put(name,data,typ,linear=False,attr=''):
 id='f'+str(len(items));items.append(f'<item id="{id}" href="{e(name)}" media-type="{typ}" {attr}/>');parts[name]=data
 if linear:spine.append(f'<itemref idref="{id}"/>')
def doc(title,b):
 return '<?xml version="1.0" encoding="utf-8"?>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en"><head><title>'+e(title)+'</title><link rel="stylesheet" href="book.css" type="text/css"/></head><body>'+b+'</body></html>'
def ul(vals):
 return '<ul>'+''.join('<li>'+e(str(v))+'</li>' for v in vals)+'</ul>'
def link(u,t):
 return '<a href="'+e(u,quote=True)+'">'+e(t)+'</a>'
def headinglist(t,vals):
 return '<h2>'+e(t)+'</h2>'+ul(vals) if vals else ''
def para(t): return '<p>'+e(t).replace('\n','<br/>')+'</p>'

def reference_html(guide):
    body = para('Checked ' + guide['reviewed'])
    body += ''.join(para(text) for text in guide['referenceIntro'])
    links = []
    for i, section in enumerate(guide['referenceSections']):
        links.append('<li>' + link('#section-' + str(i), section['title']) + '</li>')
    body += '<nav aria-label="Sections in this sheet"><ul>' + ''.join(links) + '</ul></nav>'
    for i, section in enumerate(guide['referenceSections']):
        body += '<section class="reference-section" id="section-' + str(i) + '">'
        body += '<h2>' + e(section['title']) + '</h2>'
        if section['note']:
            body += para(section['note'])
        body += '<table class="reference-table"><caption>' + e(section['title']) + '</caption><thead><tr>'
        body += ''.join('<th scope="col">' + e(label) + '</th>' for label in section['columns'])
        body += '</tr></thead><tbody>'
        for row in section['rows']:
            body += '<tr><th scope="row">' + e(row[0]) + '</th>'
            for label, cell in zip(section['columns'][1:], row[1:]):
                body += '<td><span class="reference-label">' + e(label) + '</span>' + e(cell) + '</td>'
            body += '</tr>'
        body += '</tbody></table></section>'
    return '<div class="food-reference">' + body + '</div>'

put('book.css','''body{font-family:Georgia,serif;line-height:1.5;margin:4%}h1,h2,h3{font-family:Georgia,serif;font-weight:normal;line-height:1.15;break-after:avoid}h1{font-size:1.9em}h2{font-size:1.32em;margin:1.25em 0 .35em}p{margin:.5em 0 .8em}a{color:#286660}nav li{margin:.25em 0}.kicker,.meta,figcaption,.chapter-links{font-family:-apple-system,Helvetica,Arial,sans-serif}.kicker{font-size:.88em}.meta{font-size:.95em}.scene{border-left:.2em solid #649487;padding-left:.75em}ol.steps{padding-left:1.55em}.steps>li{margin:.7em 0 1em;padding-left:.12em}.steps>li>p{margin:0}figure{margin:.7em 0 .8em;break-inside:avoid;page-break-inside:avoid}figure img{display:block;margin:auto;width:100%;max-width:36em;height:auto}figcaption{font-size:.9em;line-height:1.35;margin:.45em 0 0}figcaption strong{display:block}.warning{border-left:.2em solid #ae6f45;padding-left:.75em}.bookplate{text-align:center;margin-top:10%}.bookplate img{width:45%;max-width:15em}.chapter-links{line-height:1.35}.chapter-links li{margin:.45em 0}.refs{overflow-wrap:anywhere}''','text/css')
parts['book.css'] += '\n.reference-section{break-before:page;margin-top:2em}\n.reference-table{border-collapse:collapse;table-layout:fixed;width:100%;font-size:1em;line-height:1.45}\n.reference-table caption{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}\n.reference-table th,.reference-table td{border-bottom:1px solid #a8b6aa;padding:.65em .45em;text-align:left;vertical-align:top;overflow-wrap:anywhere}\n.reference-table th:first-child{width:23%}\n.reference-table tr{break-inside:avoid}\n.reference-table thead{display:table-header-group;background:#edf1e9;color:#172d21}\n.reference-table tbody th{font-weight:bold}\n.reference-label{display:none}\n@media(max-width:680px){\n.reference-table,.reference-table tbody{display:block;width:100%}\n.reference-table thead{display:none}\n.reference-table tr{display:block;border-bottom:2px solid #a8b6aa;margin-bottom:1.4em}\n.reference-table th,.reference-table td,.reference-table th:first-child{display:block;width:auto;padding:.5em .4em}\n.reference-label{display:block;font-size:.85em;font-weight:bold;margin-bottom:.12em}\n}\n'
put('cover.png',(root/'icon-1024.png').read_bytes(),'image/png',attr='properties="cover-image"')
put('title.xhtml',doc('Field & Home','<main class="bookplate"><img src="cover.png" alt="A compass rose above a spade and wrench"/><h1>Field &amp; Home</h1><p>Cindy’s Skills Guide</p><p>Illustrated edition</p></main>'),'application/xhtml+xml',True)
chapter_nav=[]
appendix_spine=[]
appendix_nav=[]
for no,file in enumerate(man['files'],1):
 start_spine=len(spine)
 pack=json.loads((root/'packs'/file).read_text());gs=pack['guides'];ct=gs[0]['cat'] if not file.startswith('08') else 'Friendswood Greenhouse & Garden'
 chapter=f'chapter-{no}.xhtml'; grouped=defaultdict(list)
 for g in gs:grouped[g['sub']].append(g)
 chapter_nav.append('<li>'+link(chapter,ct)+'</li>')
 def gfile(g):return g['id']+'.xhtml'
 cbody='<h1>'+e(ct)+'</h1>'
 for sub,sg in grouped.items():
  cbody+='<h2>'+e(sub)+'</h2><ul class="chapter-links">'+''.join('<li>'+link(gfile(g),g['title'])+'</li>' for g in sg)+'</ul>'
 put(chapter,doc(ct,cbody),'application/xhtml+xml',True)
 for g in gs:
  b='<p class="kicker">'+link(chapter,ct)+' · '+e(g['sub'])+'</p><h1>'+e(g['title'])+'</h1>'
  if g.get('scenario'):b+='<div class="scene">'+para(g['scenario'])+'</div>'
  b+='<p class="meta">'+e(g.get('diff',''))+' · '+e(g.get('time',''))+'</p>'+headinglist('Tools & gear',g.get('gear'))+headinglist('Supplies & ingredients',g.get('supplies'))
  if g.get('referenceSections'): b+=reference_html(g)
  b+=('<h2>Step by step</h2>' if g['steps'] else '')+'<ol class="steps">'
  for step in g['steps']:
   b+='<li>'+para(step)
   for j,fig in enumerate(old.get(g['id'],[])+g.get('illustrations',[])):
    if fig['step']!=step:continue
    if 'png' in fig:
     src='art/'+g['id']+'-'+str(j)+'.png'
     if src not in parts:put(src,base64.b64decode(fig['png']),'image/png')
    else:
     art=fig['plate']+'.svg';src='art/'+art
     if src not in parts:put(src,(root/'figures'/art).read_bytes(),'image/svg+xml')
    b+='<figure><img src="'+src+'" alt="'+e(fig['alt'],quote=True)+'"/><figcaption><strong>'+e(fig['title'])+'</strong>'+e(fig.get('caption',''))+'</figcaption></figure>'
   b+='</li>'
  b+='</ol>'
  if g.get('safety'):b+='<div class="warning"><h2>Safety &amp; key tip</h2>'+para(g['safety'])+'</div>'
  if g.get('overview'):b+=para(g['overview'])
  if g.get('sources'):b+='<h2>References</h2><ul class="refs">'+''.join('<li>'+link(u,t)+'</li>' for t,u in g['sources'])+'</ul>'
  put(gfile(g),doc(g['title'],b),'application/xhtml+xml',True)
 if file.startswith('11-'):
  appendix_spine.extend(spine[start_spine:])
  del spine[start_spine:]
  appendix_nav.append(chapter_nav.pop()[:-5]+'<ol>'+''.join('<li>'+link(gfile(g),g['title'])+'</li>' for g in gs)+'</ol></li>')
glossary={}
for file in man['files']:
 glossary.update(json.loads((root/'packs'/file).read_text()).get('glossary',{}))
gloss='<h1>Glossary</h1><dl>'+''.join('<dt><strong>'+e(entry['term'])+'</strong></dt><dd>'+para(entry['def'])+'</dd>' for entry in sorted(glossary.values(),key=lambda item:item['term'].casefold()))+'</dl>'
put('glossary.xhtml',doc('Glossary',gloss),'application/xhtml+xml',True)
chapter_nav.append('<li>'+link('glossary.xhtml','Glossary')+'</li>')
spine.extend(appendix_spine)
chapter_nav.extend(appendix_nav)
put('nav.xhtml',doc('Contents','<nav epub:type="toc"><h1>Contents</h1><ol>'+''.join(chapter_nav)+'</ol></nav>'),'application/xhtml+xml',attr='properties="nav"')
opf='<?xml version="1.0" encoding="utf-8"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="bookid">urn:uuid:df6a4725-1bc4-4be4-b320-ccfbfd75c9dc</dc:identifier><dc:title>Field &amp; Home</dc:title><dc:creator>Glenn Armbruster</dc:creator><dc:language>en</dc:language><meta property="dcterms:modified">' + datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ') + '</meta></metadata><manifest>'+''.join(items)+'</manifest><spine>'+''.join(spine)+'</spine></package>'
container='<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="EPUB/book.opf" media-type="application/oebps-package+xml"/></rootfiles></container>'
with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED) as z:
 z.writestr('mimetype','application/epub+zip',compress_type=zipfile.ZIP_STORED)
 z.writestr('META-INF/container.xml',container);z.writestr('EPUB/book.opf',opf)
 for path,data in parts.items():z.writestr('EPUB/'+path,data)
with zipfile.ZipFile(target) as z:
 assert not z.testzip();names=set(z.namelist())
 for name in names:
  if name.endswith(('.xhtml','.xml','.opf','.svg')):
   docroot=ET.fromstring(z.read(name))
   for el in docroot.iter():
    for k in ('href','src','full-path'):
     val=el.get(k)
     if not val or urlsplit(val).scheme:continue
     if val.startswith('#'):
      assert any(node.get('id')==val[1:] for node in docroot.iter()),(name,val)
      continue
     local=posixpath.normpath(posixpath.join(posixpath.dirname(name),unquote(urlsplit(val).path))) if k!='full-path' else val
     assert local in names,(name,local)
print('Validated',len(spine),'reading-order entries and',sum(n.startswith('art/') for n in parts),'image files.',target)

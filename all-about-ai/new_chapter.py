"""Create an editable reference page, worked card, figure, tags and catalog entry."""
import argparse
from datetime import date
import json
from pathlib import Path
import re
import subprocess
import sys

from edition_trust import valid_source
from review_history import save_rows

BOOK = Path(__file__).resolve().parent

def load(path):
    with path.open(encoding='utf-8') as handle:
        return json.load(handle)

def templates(page_id, title, url, tags, day):
    sources = [['Official feature guide', url]]
    setup = ('Practice desk log. Each note names an item and records whether its check is complete.\n\n'
             'Gate note: latch checked.\nLamp note: lamp still waiting for a check.\n\nWhich item has a recorded check? Give the item and its note.')
    intro = dict(what='Practice looking up one claim and checking the record behind it.',
                 features='Use the source link to find the feature and compare its controls with the practice task.',
                 exchange='Use a made-up delivery note when you try this with mail.',
                 m365='Use a blank practice document when you try this with a file.',
                 developer='Try one change with a result you can check by eye.',sources=sources)
    fact = dict(key=page_id+'.availability',value='Not verified — '+day+'. Read the linked guide and check access for your account.',
                source=url,verifiedOn=day,basis=['ai-drafted'])
    page = dict(id=page_id,title=title,summary='Follow a small test from its input to a checkable answer.',
                intro=intro,tags=tags,basis=['ai-drafted'],lastVerified=day,unverified=['{{fact.'+fact['key']+'}}'],
                sections=[dict(title='Try one small check',paragraphs=['Read both notes. See which one records a finished check.'],
                               exercise=dict(prompt=setup,answer=['Only the gate has a recorded check.']),sources=sources),
                          dict(title='Plan and availability',paragraphs=['{{fact.'+fact['key']+'}}'],sources=sources)])
    worked = dict(id=page_id,premise='Use the same gate and lamp case for both runs. Change only the lamp note on your second pass.',
                  caseTerm='lamp', before='{{chapter.sections.0.exercise.prompt}}',
                  **{'try':'1. Start a new practice chat.\n2. Give the chat the gate and lamp notes. Record the named item.\n3. Change the lamp note to “lamp checked.” Repeat the question. List matches in the original order.',
                     'after':'First run: Gate. Second run: Gate, Lamp. Both entries now have a completed check.',
                     'why':'A completed check needs a record saying the check happened.',
                     'rescue':'If both items appear on the first run, ask which one still has an unfinished check.',
                     'rescuePrompt':'Which item still says waiting? Quote the status for each item and count completed checks only.',
                     'noAccount':'Read the status lines yourself and mark the completed checks.'})
    name='diagram-extension-'+page_id+'.svg'
    figure=dict(file=name,lesson=page_id,source='#'+page_id,credit='Original teaching diagram',
                caption='Check each note before writing the result.',alt='A practice note leads to a check, then to a result.')
    svg='''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 160" role="img" aria-labelledby="t d">
<title id="t">Practice check</title><desc id="d">Read the note. Check the claim. Write the result.</desc>
<rect x="2" y="2" width="696" height="156" rx="12" fill="#faf6ea" stroke="#182c2d"/>
<text x="24" y="60" fill="#182c2d" font-size="32">Read the note</text>
<path d="M24 80H670" stroke="#8b571b" stroke-width="4"/>
<text x="24" y="124" fill="#145756" font-size="26">Check the claim, then write the result.</text></svg>
'''
    return page, worked, figure, fact, svg

def main():
    cli=argparse.ArgumentParser(description=__doc__)
    cli.add_argument('id',help='new permanent ID, lowercase words separated by hyphens')
    cli.add_argument('--title',required=True)
    cli.add_argument('--source',required=True,help='official HTTPS guide for the feature')
    cli.add_argument('--tag',action='append',required=True,help='short lowercase tag, repeat to add more')
    cli.add_argument('--dry-run',action='store_true',help='check the request and list files without writing')
    args=cli.parse_args()
    slug=r'[a-z0-9]+(?:-[a-z0-9]+)*'
    if not re.fullmatch(slug,args.id) or not all(re.fullmatch(slug,t) for t in args.tag) or not args.title.strip() or not valid_source(args.source):
        cli.error('Use a plain title, lowercase IDs and tags, and an official HTTPS source.')
    content=BOOK/'content'
    manifest=BOOK/'edition.json'
    edition=load(manifest)
    if args.id in {'contents','labs','start'} or any(row['id']==args.id for group in edition['groups'] for row in load(content/group['file'])):
        cli.error('That page ID is already used.')
    day=date.today().isoformat()
    page,worked,figure,fact,svg=templates(args.id,args.title.strip(),args.source,list(dict.fromkeys(args.tag)),day)
    filename='additional-reference.json'
    group=next((g for g in edition['groups'] if g['file']==filename),None)
    if group is None:
        group=dict(file=filename,title='Additional reference guides',reviewed=day)
        edition['groups'].append(group)
    group['reviewed']=max(day,group['reviewed'])
    edition['reviewed']=max(day,edition['reviewed'])
    edition['extensionPages'].append(args.id)
    files={manifest:edition}
    for filename,item in [(filename,page),('worked.json',worked),('figures.json',figure),('facts.json',fact)]:
        path=content/filename
        rows=load(path) if path.exists() else []
        field='key' if filename=='facts.json' else 'file' if filename=='figures.json' else 'id'
        if any(row[field]==item[field] for row in rows):
            cli.error('Already present in '+filename)
        files[path]=rows+[item]
    pic=BOOK/'pictures'/figure['file']
    if pic.exists():cli.error('The figure file already exists.')
    if args.dry_run:
        print('Would create '+args.id+' and update: '+', '.join(p.relative_to(BOOK).as_posix() for p in [*files,pic]))
        return
    build=[sys.executable,str(BOOK/'update_edition.py')]
    subprocess.run([*build,'--check'],check=True)
    old={path:path.read_bytes() if path.exists() else None for path in [*files,pic]}
    try:
        with pic.open('x',encoding='utf-8') as handle: handle.write(svg)
        for path,value in files.items():save_rows(path,value)
        subprocess.run(build,check=True)
        subprocess.run([*build,'--check'],check=True)
    except BaseException:
        for path,value in old.items():
            if value is None:path.unlink(missing_ok=True)
            else:path.write_bytes(value)
        subprocess.run(build,check=False)
        raise
    print('Created '+args.id+'. Replace the gate-and-lamp example with a tested example for the new feature.')
if __name__=='__main__':
    main()

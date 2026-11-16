"""Build an offline English lexicon from the dated Kaikki English JSONL extract.

Run with Python 3.9+, e.g. python3 build_lexicon.py source.jsonl.gz data/.
See DATA-CREDITS.md for source, license and options for refreshing the edition.
"""
import argparse
from collections import defaultdict
import gzip
import hashlib
import itertools
import json
from pathlib import Path
import re
import sqlite3
import tempfile
import unicodedata

SOURCE = 'https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl.gz'
EDITION = 'english-20261001-r1'
SOURCE_SHA256 = '4d03b6cba283744756c57ff661c2c6cbfe34fcf8ff513a966576cf7d97e91a99'
CHUNK_SIZE = 8192
POS = {
    'adj':'adjective','adv':'adverb','ambiposition':'adposition','article':'article','character':'character',
    'circumfix':'circumfix','circumpos':'circumposition','combining_form':'combining form','conj':'conjunction',
    'contraction':'contraction','det':'determiner','infix':'infix','intj':'interjection','name':'proper noun',
    'num':'numeral','postp':'postposition','prep':'preposition','prep_phrase':'prepositional phrase',
    'pron':'pronoun','punct':'punctuation','converb':'verb','romanization':'romanization','symbol':'symbol',
}
REGISTER = {
    'vulgar':'vulgar','offensive':'offensive','slur':'offensive','derogatory':'derogatory','ethnic-slur':'ethnic slur',
    'slang':'slang','colloquial':'informal','informal':'informal','humorous':'humorous','euphemistic':'euphemistic',
    'dated':'dated','obsolete':'obsolete','archaic':'archaic','historical':'historical','nonstandard':'nonstandard',
    'rare':'rare','dialectal':'dialectal','literary':'literary','figuratively':'figurative','formal':'formal',
    'UK':'British English','British':'British English','US':'US English','Canada':'Canadian English',
    'Australia':'Australian English','Ireland':'Irish English','New-Zealand':'New Zealand English',
    'South-Africa':'South African English','India':'Indian English','Scotland':'Scottish English',
    'England':'England','Wales':'Wales','Northern-England':'Northern England','Northern-Ireland':'Northern Ireland',
    'Cockney':'Cockney','African-American-Vernacular-English':'African-American Vernacular English',
    'Commonwealth':'Commonwealth English','abbreviation':'abbreviation','acronym':'acronym','initialism':'initialism',
    'pejorative':'derogatory','profanity':'profanity','taboo':'taboo','childish':'childish',
}
USAGE = {'vulgar','offensive','derogatory','ethnic slur','slang','profanity','taboo'}
ALTERNATE = re.compile(r'^(?P<area>.{0,130}?)\b(?:(?:alternative|alternate|standard|chiefly|variant|nonstandard|obsolete|rare|historical) )?(?:spelling|form) of (?P<term>[^.;,:()]{1,92})\.?$', re.I)
SENTENCE_END = re.compile(r'(?<=[.!?])\s+(?=[A-Z])')
BOILERPLATE = re.compile(r'(?:^Rfdef|^This term needs a definition|^\(This entry is here for translation purposes|^\(please add an English translation|^A term needing a definition|^Definition needed)',re.I)
# Retain the lexical meaning of hazardous subjects without republishing construction/attack detail.
DETAIL = re.compile(r'\b(?:by (?:combining|mixing|igniting|inserting|stuffing|packing|placing|inducing|exposing|injecting|infecting|filling|attaching)|consist\w* of|contain\w*|made (?:out )?(?:of|from|by|with)|mixture of|filled with|compris\w*|composed of|designed to|prepared (?:with|by|from)|using|ingredients|proportion|parts of|layer of|similar to)\b',re.I)
HAZARDS = [
    (r'\b(?:explosive|incendiary|detonator|warhead|grenade|bomb|booby trap)s?\b','A type of explosive or incendiary device or material.'),
    (r'\b(?:ransomware|shellcode|injection attack|buffer overflow exploit|exploit payload)s?\b','A term for malicious code or a computer security exploit.'),
    (r'\b(?:bioweapon|biological weapon|weaponized pathogen)s?\b','A term relating to biological weapons.'),
]
HAZARDS=[(re.compile(pattern,re.I),replacement) for pattern,replacement in HAZARDS]
SKIP_POS = {'soft-redirect', 'typographic variant'}
def compact(item):
    return json.dumps(item,ensure_ascii=False,separators=(',',':'))

def plain(value):
    return ' '.join(str(value).split()).strip()

def key(word):
    return ''.join(c for c in unicodedata.normalize('NFKD', word.lower()) if not unicodedata.combining(c))

def shorten(text):
    text = plain(text)
    if len(text)>135:
        # Complete first sentences; don't split a name, abbreviation or decimal.
        for boundary in SENTENCE_END.finditer(text):
            leading=text[:boundary.start()].rstrip()
            if len(leading)>=30 and not re.search(r'\b(?:[A-Za-z]|e\.g|i\.e|etc|Mr|Mrs|Dr|St|U\.S)\.$',leading):
                text=leading
                break
    if len(text)>125:
        for delimiter in ('; ', ', especially ', ', particularly ', ', such as ', ', for example ', ', often also ', ', usually including ', ', which may include '):
            leading,separator,_=text.partition(delimiter)
            if separator and len(leading)>=26 and not re.search(r'\b(?:either|whether|such|both)\b',leading,re.I) and leading.count('(')==leading.count(')'):
                text=leading.rstrip(' ,.:')+'.'
                break
    return text

def sense_data(word,pos,sense):
    glosses=sense.get('glosses') or []
    if not glosses: return None
    text=plain(glosses[-1]).replace('{{n-g|','').replace('}}','')
    if text.startswith(('...', '…')) and len(glosses)>1:
        parent=plain(glosses[-2]).rstrip('.…:; ')
        if parent and not parent.startswith(('...', '…')):
            # Some dictionary senses finish a preceding open-ended grammatical definition.
            text=parent+' '+text.lstrip('.… ')
    tags=sense.get('tags') or []
    if not text or BOILERPLATE.search(text) or 'no-gloss' in tags: return None
    labels=list(dict.fromkeys(REGISTER[t] for t in tags if t in REGISTER))
    targets=sense.get('alt_of') or sense.get('form_of') or []
    target=plain(targets[0].get('word','')) if targets else ''
    match=ALTERNATE.fullmatch(text)
    if match:
        target=target or match['term'].strip()
        if re.search(r'\b(?:UK|United Kingdom|British|Commonwealth)\b',text.split(' of ')[0]) or 'UK' in tags or 'British' in tags:
            labels=['British spelling']+[t for t in labels if t!='British English']
            if 'UK' not in tags:
                for rg, label in [('Canad','Canadian English'),('Austral','Australian English'),('Ireland|Irish','Irish English'),('New Zealand','New Zealand English'),('South Africa','South African English'),('Commonwealth','Commonwealth English')]:
                    if re.search(rg,match['area']) and label not in labels: labels.append(label)
            text='Variant spelling of '+target+'.'
    if not target and re.match(r'^(?:plural|simple past|present participle|comparative|superlative) of ',text,re.I):
        target=text.partition(' of ')[2].strip('.')
    if len(target)>120 or target==word: target=''
    if DETAIL.search(text):
        for pattern, replacement in HAZARDS:
            if pattern.search(text):
                if re.search(r'\b(?:explosive growth|bomb calorimeter|box.office bomb|bomb cyclone|explosive consonant)\b',text,re.I):continue
                text=replacement
                break
    # Glosses are definitions only; omit explicit media, examples, quotations and usage notes.
    text=shorten(text)
    if text.endswith(':'):return None
    if not text or text.startswith(('^(', '† ', '[please add')):return None
    result=[pos,', '.join(labels),text]
    if target: result.append(target)
    return result

def curate(group):
    senses=[];seen={};primary=set();by_pos=defaultdict(list)
    def score(i):
        sense=senses[i];labels=set(sense[1].split(', '))
        return (int(bool(labels&{'obsolete','archaic','dated','rare'})), int(len(sense)>3), i)
    for row in group:
        lexical_record=[]
        for sense in json.loads(row[1]):
            ident=(sense[0],sense[1],sense[2].casefold())
            if ident not in seen:
                seen[ident]=len(senses)
                by_pos[sense[0]].append(len(senses))
                senses.append(sense)
            lexical_record.append(seen[ident])
        if lexical_record:
            # Different etymologies can have the same spelling and part of speech,
            # as in a financial bank and a river bank. Keep a lead sense from each.
            primary.add(min(lexical_record,key=score))
    protected=primary.copy()
    for candidates in by_pos.values():
        ordered=sorted(candidates,key=score)
        protected.update(ordered[:6])
        for marker in (USAGE,{'British spelling'}):
            pick=next((i for i in ordered if set(senses[i][1].split(', '))&marker),None)
            if pick is not None: protected.add(pick)
    pos_order={pos:n for n,pos in enumerate(by_pos)}
    def display(i):
        pos=senses[i][0]
        obsolete,redirect,_=score(i)
        return (pos=='proper noun',pos_order[pos],obsolete,i not in primary,redirect,i)
    return [senses[i] for i in sorted(protected,key=display)]


def write_gzip(path,text):
    with path.open('wb') as stream, gzip.GzipFile(filename='', mode='wb', fileobj=stream, mtime=0, compresslevel=7) as dst:
        dst.write(text.encode())

def build(source, dest, database):
    db=sqlite3.connect(database)
    db.executescript('PRAGMA journal_mode=OFF; PRAGMA synchronous=OFF; PRAGMA temp_store=MEMORY; PRAGMA cache_size=-90000; CREATE TABLE records (word TEXT, folded TEXT, senses TEXT);')
    with gzip.open(source,'rb') as src:
        for line in src:
            data=json.loads(line);word=plain(data.get('word',''))
            if data.get('lang_code')!='en' or not word or any(c in data.get('word','') for c in '\n\r\t') or data.get('pos') in SKIP_POS:continue
            pos=POS.get(data['pos'],data['pos'].replace('_',' '))
            senses=[s for s in (sense_data(word,pos,sense) for sense in data['senses']) if s]
            if senses: db.execute('INSERT INTO records VALUES (?,?,?)',(word,key(word),compact(senses)))
    db.commit()
    db.execute('CREATE INDEX lookup ON records (folded, word)')
    print('Indexed lexical records.',flush=True)
    dest.mkdir(exist_ok=True,parents=True)
    headwords={row[0] for row in db.execute('SELECT DISTINCT word FROM records')}
    filenames=[];words=[];chunk=[];total_senses=0;max_length=0
    def finish_chunk():
        filename=f'{len(filenames):04d}.json.gz'
        write_gzip(dest/filename,compact(chunk))
        filenames.append(filename);chunk.clear()
    for word,group in itertools.groupby(db.execute('SELECT word,senses FROM records ORDER BY folded,word,rowid'),key=lambda row:row[0]):
        records=curate(group)
        if not records:continue
        for sense in records:
            if len(sense)>3 and sense[3] not in headwords:
                sense.pop()
        words.append(word);chunk.append(records)
        total_senses+=len(records)
        max_length=max(max_length,max(len(s[2]) for s in records))
        if len(chunk)==CHUNK_SIZE: finish_chunk()
    if chunk:finish_chunk()
    db.close()
    write_gzip(dest/'words.txt.gz','\n'.join(words))
    meta=dict(edition=EDITION,count=len(words),senses=total_senses,chunkSize=CHUNK_SIZE,chunks=filenames,
         source='English Wiktionary contributors, via Kaikki.org and Wiktextract', sourceURL='https://kaikki.org/dictionary/English/',
         downloadURL=SOURCE,sourceSHA256=SOURCE_SHA256,dumpDate='2026-10-01',extractionDate='2026-10-30',
         license='CC BY-SA 4.0',licenseURL='https://creativecommons.org/licenses/by-sa/4.0/')
    (dest/'meta.json').write_text(json.dumps(meta,indent=2)+'\n')
    print('Headwords',len(words),'senses',total_senses,'chunks',len(filenames),'max gloss',max_length,flush=True)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source',type=Path);parser.add_argument('destination',type=Path)
    args=parser.parse_args()
    with args.source.open('rb') as fp:
        digest=hashlib.sha256()
        for piece in iter(lambda:fp.read(2**20),b''):digest.update(piece)
    if digest.hexdigest()!=SOURCE_SHA256:
        parser.error('Source digest differs; verify its source date, then update edition metadata and digest.')
    with tempfile.TemporaryDirectory() as temp:
        build(args.source,args.destination,Path(temp)/'build.sqlite')

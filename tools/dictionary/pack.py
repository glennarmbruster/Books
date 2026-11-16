"""Combine a built Wiktionary data directory, a historical {word: senses} gzip
JSON, and this edition's editorial.json. The destination holds web-ready packs.
Order in words.txt.gz is the positional key into the numbered definition files.
"""
import argparse
import gzip
import json
from pathlib import Path

def build(primary, historical_file, dest):
    meta=json.loads((primary/'meta.json').read_text())
    words=gzip.decompress((primary/'words.txt.gz').read_bytes()).decode().split('\n')
    assert len(words)==meta['count']
    primary_count=len(words)
    known=set(words)
    folded={w.casefold() for w in words}
    editorial=json.loads((dest/'editorial.json').read_text())
    original=editorial['entries']
    with gzip.open(historical_file,'rt') as stream:
        historical={word:senses for word,senses in json.load(stream).items()
                    if word.casefold() not in folded and word not in original}
    extras={word:senses for word,senses in original.items() if word not in known}
    extras.update(historical)
    for pair in editorial['variants']:
        uk,us=pair['uk'],pair['us']
        for word,target,label in [(uk,us,'British spelling'),(us,uk,'US spelling')]:
            if word not in known and word not in extras and (target in known or target in original):
                extras[word]=[['spelling',label,'Regional spelling of '+target+'.',target]]
    buf=[]; files=[]; sense_count=0
    def flush():
        name=f'{len(files):04}.json.gz'
        dest.joinpath(name).write_bytes(gzip.compress(json.dumps(buf,ensure_ascii=False,separators=(',',':')).encode(),compresslevel=7,mtime=0))
        files.append(name);buf.clear()
    def add(senses):
        nonlocal sense_count
        assert senses
        sense_count+=len(senses);buf.append(senses)
        if len(buf)==meta['chunkSize']:flush()
    i=0
    for file in meta['chunks']:
        with gzip.open(primary/file,'rt') as stream:
            for senses in json.load(stream):
                word=words[i]; i+=1
                if word in original:
                    # Preserve distinct source meanings after the editorial quick definitions.
                    quick=original[word]
                    senses=quick+[s for s in senses if s[2].casefold() not in {q[2].casefold() for q in quick}]
                add(senses)
    assert i==primary_count
    for word in sorted(extras):
        words.append(word);add(extras[word])
    if buf:flush()
    (dest/'words.txt.gz').write_bytes(gzip.compress('\n'.join(words).encode(),compresslevel=7,mtime=0))
    meta.update(count=len(words),primaryCount=primary_count,historicalCount=len(historical),senses=sense_count,chunks=files)
    meta['downloadBytes']=sum(p.stat().st_size for p in dest.iterdir() if p.is_file() and p.name!='meta.json')
    (dest/'meta.json').write_text(json.dumps(meta,indent=2)+'\n')
    print(f"{len(words):,} searchable headwords; {len(historical):,} added from 1913; {sense_count:,} senses; {meta['downloadBytes']/1e6:.1f} MB")
if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    for name in ('primary','historical_file','dest'):parser.add_argument(name,type=Path)
    build(**vars(parser.parse_args()))

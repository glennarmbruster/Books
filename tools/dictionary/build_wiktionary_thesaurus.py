"""Create 64 deterministic thesaurus shards from Kaikki and dictionary headwords.

Place next to build_lexicon.py (or set PYTHONPATH to its directory). Inputs:
  python3 build_wiktionary_thesaurus.py source.jsonl.gz words.txt.gz output/
"""
import argparse
from collections import Counter, defaultdict
import gzip
import json
from pathlib import Path

from build_lexicon import POS, REGISTER, SKIP_POS, plain, sense_data


RELATIONS = ('synonyms', 'antonyms')
MAX_LINKS = 16


def bucket(word):
    value = 2166136261
    for byte in word.encode():
        value = ((value ^ byte) * 16777619) & 0xffffffff
    return value % 64


def gloss_with_usage(word, pos, sense):
    data = sense_data(word, pos, sense)
    if data:
        return (f'({data[1]}) ' if data[1] else '') + data[2]
    return ''


def gather(record, known, groups):
    word = record.get('word')
    if word not in known or record.get('lang_code') != 'en' or record.get('pos') in SKIP_POS:
        return
    pos = POS.get(record['pos'], record['pos'].replace('_', ' '))
    senses = record.get('senses') or []
    if not any(record.get(rel) or any(s.get(rel) for s in senses) for rel in RELATIONS):
        return

    def add(link, rel, gloss):
        target = link.get('word')
        if not gloss or not target or target == word or target not in known:
            return
        # Romanizations and linkages explicitly attributed to other languages
        # do not belong to this English thesaurus.
        if link.get('lang_code', 'en') != 'en':
            return
        labels = list(dict.fromkeys(REGISTER[t] for t in link.get('tags', []) if t in REGISTER))
        if labels:
            gloss += ' · Alternatives marked ' + ', '.join(labels)
        pair = groups[word].setdefault((pos, gloss), [{}, {}])
        if len(pair[rel]) < MAX_LINKS:
            pair[rel][target] = None

    # Kaikki repeats parent links on child senses. Only show links with the
    # most general gloss to which the source explicitly attached them.
    links_by_path = {}
    for s in sorted(senses, key=lambda s:len(s.get('glosses', []))):
        path = tuple(s.get('glosses', []))
        if not path:
            continue
        own_links = links_by_path.setdefault(path, set())
        gloss = gloss_with_usage(word, pos, s)
        for rel, field in enumerate(RELATIONS):
            for link in s.get(field, []):
                signature = (rel, link.get('word'), tuple(link.get('tags', [])))
                own_links.add(signature)
                if not any(signature in links_by_path.get(path[:n], ()) for n in range(1,len(path))):
                    add(link, rel, gloss)

    # For multi-sense entries, associations lacking an explicit sense are
    # ambiguous. Retain entry-level alternatives only with a verifiable sense.
    for rel, field in enumerate(RELATIONS):
        for link in record.get(field, []):
            if link.get('sense'):
                gloss = gloss_with_usage(word, pos, {'glosses':[link['sense']]})
            elif len(senses) == 1:
                gloss = gloss_with_usage(word, pos, senses[0])
            else:
                continue
            add(link, rel, gloss)


def build(source, headwords, destination):
    destination.mkdir(parents=True, exist_ok=True)
    with gzip.open(headwords, 'rt') as stream:
        known = {line.rstrip('\n') for line in stream}
    groups = defaultdict(dict)
    with gzip.open(source, 'rb') as stream:
        for index, line in enumerate(stream):
            # Most entries are inflections without semantic links.
            if b'"synonyms"' not in line and b'"antonyms"' not in line:
                continue
            gather(json.loads(line), known, groups)
    shards = [{} for _ in range(64)]
    stats = Counter()
    for word in sorted(groups):
        senses = []
        for (pos, gloss), (syn, ant) in groups[word].items():
            # Opposing assertions for the same word in one sense are ambiguous.
            conflict = syn.keys() & ant.keys()
            syn = [w for w in syn if w not in conflict]
            ant = [w for w in ant if w not in conflict]
            if not (syn or ant):
                continue
            senses.append([pos, gloss, syn, ant, []])
            stats['synonymLinks'] += len(syn)
            stats['antonymLinks'] += len(ant)
        if senses:
            shards[bucket(word)][word] = senses
            stats['headwords'] += 1
            stats['senses'] += len(senses)
    for idx, shard in enumerate(shards):
        body = json.dumps(shard, separators=(',', ':'),ensure_ascii=False).encode()
        target = destination / f'{idx:02x}.json.gz'
        target.write_bytes(gzip.compress(body, compresslevel=9, mtime=0))
        stats['compressedBytes'] += target.stat().st_size
    (destination/'stats.json').write_text(json.dumps(stats,indent=2)+'\n')
    print(dict(stats),flush=True)


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    for arg in ('source', 'headwords', 'destination'):
        parser.add_argument(arg, type=Path)
    build(**vars(parser.parse_args()))

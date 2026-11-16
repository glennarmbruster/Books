"""Combine the two thesaurus sources and index them against this dictionary's exact spellings."""
import argparse
import base64
import gzip
import json
from pathlib import Path


def write_pack(path, payload):
    text = json.dumps(payload, ensure_ascii=False, separators=(',', ':')).encode()
    path.write_bytes(gzip.compress(text, compresslevel=9, mtime=0))


def pack(dictionary, sources):
    with gzip.open(dictionary / 'words.txt.gz', 'rt') as stream:
        ids = {word: i for i, word in enumerate(stream.read().split('\n'))}
    directory = dictionary / 'thesaurus'
    directory.mkdir(exist_ok=True)
    memberships = bytearray((len(ids) + 7) // 8)
    records = [{} for _ in range(64)]
    count = senses = 0
    for part in range(64):
        files = [source / f'{part:02x}.json.gz' for source in sources]
        groups_by_word = {}
        for path in files:
            with gzip.open(path, 'rt') as stream:
                for word, groups in json.load(stream).items():
                    entry = groups_by_word.setdefault(word, {})
                    for pos, gloss, synonyms, antonyms, related in groups:
                        sense = entry.setdefault((pos, gloss), [[], [], []])
                        for combined, values in zip(sense, [synonyms, antonyms, related]):
                            for value in values:
                                if value != word and value in ids and value not in combined:
                                    combined.append(value)
        for word, entry in groups_by_word.items():
            groups = [[pos, gloss, *lists] for (pos, gloss), lists in entry.items() if any(lists)]
            if not groups:
                continue
            identifier = ids[word]
            records[identifier % len(records)][identifier] = groups
            memberships[identifier // 8] |= 1 << (identifier % 8)
            count += 1
            senses += len(groups)
    for index, shard in enumerate(records):
        write_pack(directory / f'{index:02x}.json.gz', shard)
    write_pack(directory / 'index.json.gz', {
        'count': count, 'size': len(ids), 'shards': len(records),
        'bits': base64.b64encode(memberships).decode('ascii')
    })
    print(f'{count:,} thesaurus entries, {senses:,} sense groups')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('dictionary', type=Path)
    parser.add_argument('sources', type=Path, nargs='+')
    args = parser.parse_args()
    pack(args.dictionary, args.sources)

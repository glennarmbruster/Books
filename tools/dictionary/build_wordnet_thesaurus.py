"""Pack Open English WordNet for The Desk Dictionary (standard-library Python).

Download the pinned XML archive from SOURCE_URL below. Run:
    python3 build_wordnet_thesaurus.py source.xml.gz desk-dictionary/data/words.txt.gz output/

Each group is [part of speech, meaning, synonyms, antonyms, similar adjectives].
Hash exact UTF-8 headwords with 32-bit FNV-1a and keep the low six bits.
"""
import argparse
import gzip
import hashlib
import json
from collections import defaultdict
from pathlib import Path
import xml.etree.ElementTree as ET

SOURCE_URL = "https://github.com/globalwordnet/english-wordnet/releases/download/2025-edition/english-wordnet-2025.xml.gz"
SOURCE_SHA256 = "9ca6d1dcb75f822fdd66617f7d9da48142ace38dd544d6ad5e2feca1674ad3fe"
POS = {"a": "adjective", "s": "adjective", "n": "noun", "v": "verb", "r": "adverb"}


def shard(word):
    value = 2166136261
    for byte in word.encode("utf-8"):
        value = ((value ^ byte) * 16777619) & 0xffffffff
    return value % 64


def known_forms(path):
    with gzip.open(path, "rt", encoding="utf-8") as stream:
        exact = set(stream.read().splitlines())
    folded = {}
    for form in exact:
        key = form.casefold()
        folded[key] = None if key in folded else form

    def resolve(form):
        return form if form in exact else folded.get(form.casefold())
    return resolve


def parse(xml_path, resolve):
    entries, senses, synsets = {}, {}, {}
    with gzip.open(xml_path, "rb") as stream:
        for _, elem in ET.iterparse(stream, events=["end"]):
            if elem.tag == "LexicalEntry":
                lemma = elem.find("Lemma")
                word = resolve(lemma.attrib["writtenForm"])
                if word:
                    entry_id = elem.attrib["id"]
                    entries[entry_id] = word
                    for sense in elem.findall("Sense"):
                        antonyms = [rel.attrib["target"] for rel in sense.findall("SenseRelation[@relType='antonym']")]
                        senses[sense.attrib["id"]] = (word, sense.attrib["synset"], antonyms)
                elem.clear()
            elif elem.tag == "Synset":
                members = [entries[entry_id] for entry_id in elem.attrib["members"].split() if entry_id in entries]
                similar = [rel.attrib["target"] for rel in elem.findall("SynsetRelation[@relType='similar']")]
                gloss = " ".join(elem.findtext("Definition", "").split())
                synsets[elem.attrib["id"]] = (POS[elem.attrib["partOfSpeech"]], gloss, members, similar)
                elem.clear()
    return senses, synsets


def distinct(words, used):
    result = []
    for word in words:
        if word not in used:
            result.append(word)
            used.add(word)
    return result


def collect(senses, synsets):
    groups = defaultdict(list)
    for word, synset_id, opposite_ids in senses.values():
        pos, gloss, members, similar = synsets[synset_id]
        if not gloss:
            continue
        used = {word}
        synonyms = distinct(members, used)
        antonyms = distinct((senses[i][0] for i in opposite_ids if i in senses), used)
        nearby = []
        if pos == "adjective":
            nearby = distinct((w for s in similar for w in synsets[s][2]), used)
        if synonyms or antonyms or nearby:
            groups[word].append([pos, gloss, synonyms, antonyms, nearby])
    return groups


def build(xml_path, words_path, output):
    if hashlib.sha256(xml_path.read_bytes()).hexdigest() != SOURCE_SHA256:
        raise ValueError("Expected the Open English WordNet 2025 XML archive.")
    resolve = known_forms(words_path)
    senses, synsets = parse(xml_path, resolve)
    groups = collect(senses, synsets)
    buckets = [{} for _ in range(64)]
    for word in sorted(groups):
        buckets[shard(word)][word] = groups[word]
    output.mkdir(parents=True, exist_ok=True)
    for i, entries in enumerate(buckets):
        data = json.dumps(entries, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        (output / f"{i:02x}.json.gz").write_bytes(gzip.compress(data, compresslevel=9, mtime=0))
    print(f"{len(groups):,} entries, {sum(map(len,groups.values())):,} sense groups")
    for i, label in enumerate(("synonyms", "antonyms", "similar words"), start=2):
        print(f"{sum(len(g[i]) for rows in groups.values() for g in rows):,} {label}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    for name in ("xml_path", "words_path", "output"):
        parser.add_argument(name, type=Path)
    build(**vars(parser.parse_args()))

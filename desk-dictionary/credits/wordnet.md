# Thesaurus credits

This edition adapts Open English WordNet 2025, developed by the Open English WordNet team from Princeton University's WordNet. The authors of those resources retain their respective copyright interests.

## Source and license

- Open English WordNet source release — https://github.com/globalwordnet/english-wordnet/releases/tag/2025-edition
- Compressed XML source — https://github.com/globalwordnet/english-wordnet/releases/download/2025-edition/english-wordnet-2025.xml.gz
- Source SHA-256 — 9ca6d1dcb75f822fdd66617f7d9da48142ace38dd544d6ad5e2feca1674ad3fe
- Open English WordNet home — https://en-word.net/
- Source repository — https://github.com/globalwordnet/english-wordnet
- License — Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/
- Original Princeton WordNet terms — included in wordnet-princeton.txt
- Complete Open English WordNet license and attribution — included in wordnet-license.txt
- CC BY 4.0 legal code — included in CC-BY-4.0.txt

## Changes in this edition

The data was converted from WordNet LMF XML to compressed JSON files. Entries and links were restricted to headwords available in The Desk Dictionary. Exact matches are preferred, followed by unique case-insensitive matches. Punctuation, spelling, accents and phrases are preserved.

Synonyms come from a shared WordNet synset. Antonyms come from explicit lexical antonym relations. Similar words come from explicit similar-adjective relations and are presented separately. The meaning labels retain the source definitions with whitespace normalized. Examples, pronunciations and other relation types are omitted. Repeated words and the entry's own headword are omitted from each group. A group is included when at least one usable link remains.

The dictionary contains many inflected forms, names and specialized terms for which this thesaurus has no entry. The interface should report that no thesaurus entry is available when a headword has no groups. No antonym is inferred when the source gives none.

Synonyms can differ in register or nuance. The sense heading identifies the intended meaning. The dictionary's definition and usage labels are available by opening the linked word.

## Rebuilding

Download the pinned compressed XML source and use the dictionary edition's words.txt.gz. Run build_wordnet_thesaurus.py with those two file paths and an output directory. Each compressed shard contains an object keyed by exact dictionary headword, with arrays in this order.

    [partOfSpeech, meaning, synonyms, antonyms, similarAdjectives]

Shard filenames run from 00.json.gz through 3f.json.gz. The shard number is the low six bits of a 32-bit FNV-1a hash over the headword's UTF-8 bytes.

The adaptation is available under CC BY 4.0, with the upstream notices retained. Neither Princeton University nor the Open English WordNet team endorses this book.

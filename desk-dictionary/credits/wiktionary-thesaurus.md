# Wiktionary thesaurus supplement

Source entries were written by English Wiktionary contributors. The English Wiktionary dump dated October 1, 2026 was extracted by Kaikki.org with Wiktextract on October 30, 2026. The compressed source SHA-256 is 4d03b6cba283744756c57ff661c2c6cbfe34fcf8ff513a966576cf7d97e91a99. Each headword links to its Wiktionary article and edit history for attribution.

- https://en.wiktionary.org/wiki/Wiktionary:Copyrights
- https://kaikki.org/dictionary/English/
- https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl.gz
- https://github.com/tatuylonen/wiktextract
- https://creativecommons.org/licenses/by-sa/4.0/

This adapted data is licensed under Creative Commons Attribution-ShareAlike 4.0. Its license is included in CC-BY-SA-4.0.txt.

Changes include selecting explicit English synonym and antonym relationships, shortening sense labels, keeping usage labels, removing self-links and unresolved links, and limiting each displayed relationship group to 16 alternatives. Parent-sense relationships repeated by the extractor in child senses are shown once with the parent sense. Entry-wide relationships without a sense are omitted for ambiguous multi-sense entries. The extraction supplies no inferred inverse links, hypernyms or loosely related words. Imported links can carry regional, dated, vulgar or offensive usage labels.

To rebuild, use Python 3.9+ and place build_wiktionary_thesaurus.py alongside this dictionary's tools/dictionary/build_lexicon.py, or set PYTHONPATH to that directory. Run with the compressed source, the dictionary's words.txt.gz index and an output directory.

The 64 JSON gzip files partition exact headwords by 32-bit FNV-1a over UTF-8 bytes, modulo 64. Every relation target is an exact headword in the dictionary. Each value consists of [part of speech, sense label, synonyms, antonyms, related words]. Related words is empty in this supplement.

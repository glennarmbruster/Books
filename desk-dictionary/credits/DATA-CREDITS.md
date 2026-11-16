# Dictionary data and credits

The headwords and definitions in this collection are adapted from entries by **English Wiktionary contributors**. Each entry’s source article and edit history credit its contributors. In the reader, follow the source link for the displayed headword. Source articles are available at `https://en.wiktionary.org/wiki/HEADWORD#English`, replacing HEADWORD with the URL-encoded word. [English Wiktionary](https://en.wiktionary.org/) · [Reuse information](https://en.wiktionary.org/wiki/Wiktionary:Copyrights)

The source edition is the English Wiktionary dump dated October 1, 2026, extracted by Kaikki.org on October 30, 2026. The importer selected English headwords and definitions, condensed some glosses, standardized usage labels and spelling references, and omitted examples, quotations, etymologies, translations, and media. It selected senses for the pocket format. An entry may have additional senses or usage information in the source. [Kaikki English dictionary](https://kaikki.org/dictionary/English/) · [Download the source JSONL](https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl.gz)

Wiktextract extracted the structured dictionary data. See Tatu Ylonen, “Wiktextract: Wiktionary as Machine-Readable Structured Data,” LREC 2022, pp. 1317–1325. [Research paper](https://aclanthology.org/2022.lrec-1.140/) · [Wiktextract](https://github.com/tatuylonen/wiktextract)

The adapted dictionary data is distributed under **Creative Commons Attribution–ShareAlike 4.0 International**. This attribution and the license apply to the derived dictionary data, including the index and definition files. No endorsement by Wiktionary, Wikimedia, or Kaikki is implied. [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Legal code](https://creativecommons.org/licenses/by-sa/4.0/legalcode)

## Rebuild this edition

Use Python 3.9 or later and the compressed source from the link above. Its SHA-256 is `4d03b6cba283744756c57ff661c2c6cbfe34fcf8ff513a966576cf7d97e91a99`. Kaikki refreshes its download in place. When updating to a newer source, verify its dates and SHA-256, then update the edition metadata and digest in the importer. Build into an empty output directory.

```sh
python3 build_lexicon.py source.jsonl.gz data
```

The zero-based position of each headword in `words.txt.gz` identifies its block and row. Use the fixed block size and filenames in `meta.json`. Each numbered gzip file holds a JSON array of entries. An entry holds one or more senses, with part of speech, usage labels, and gloss. Where supplied, a fourth element gives a reference headword. The search index contains one display headword per line in Unicode lowercased, accent-folded sort order. Distinct exact spellings and capitalization remain separate.

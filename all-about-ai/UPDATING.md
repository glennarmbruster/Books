# Updating All About AI

The book is a dated reference. Each subject has its own file under `content/`. Chapters use stable IDs so a saved chapter link still works after edits. The order of groups in `edition.json` sets the reading order.

1. Open the official sources beside the relevant passages. Check the date, model ID, region, consumer plan, app or API, device, and supported inputs and outputs. Check the corresponding entries in `field-comparisons.json` whenever a model or price changes.
2. Edit the affected chapters. Keep capabilities and prices tied to sources. Mark trial suggestions as suggestions. Keep useful retirement dates with migration guidance. Add a new chapter by copying an existing entry and giving it a unique ID.
3. Set the affected groups’ review dates and the edition date in `edition.json`. For a new subject, add its JSON filename to the groups list. Current watch item for the first refresh is Google’s scheduled December 1, 2026 pricing change.
4. From the repository root run `python3 all-about-ai/update_edition.py`. This checks the chapters, updates the offline download list and gives the shelf and reader a matching edition. To verify without changing files, run it with `--check`.
5. Open the bookshelf locally through a web server. Try search, a model table, a chapter link and an offline reload. Publish the changed files with the normal bookshelf update. On iPad, use the book’s download control on the shelf while online. On compact screens, tap Downloads first.

A two-to-three-week review can start with each vendor’s dated releases, then its model catalog, pricing and help pages. Chapters and citations are bundled with the book. Following an external source link requires an internet connection.

# Updating All About AI

The book is a dated reference. Each subject has its own file under `content/`. Chapters use stable IDs so a saved chapter link still works after edits. The order of groups in `edition.json` sets the reading order.

1. Open the official sources beside the relevant passages. Check the date, model ID, region, consumer plan, app or API, device, and supported inputs and outputs. Check the corresponding entries in `field-comparisons.json` whenever a model or price changes.
2. Edit the affected chapters. Keep capabilities and prices tied to sources. Mark trial suggestions as suggestions. Keep useful retirement dates with migration guidance. Each chapter’s intro defines the subject, names its features and gives separate uses for Exchange engineering, Microsoft 365 engineering and personal app development. Keep suggested uses grounded in the access the reader actually has. Add a new chapter by copying an existing entry and giving it a unique ID.
3. Set the affected groups’ review dates and the edition date in `edition.json`. For a new subject, add its JSON filename to the groups list. Current watch item for the first refresh is Google’s scheduled December 1, 2026 pricing change.
4. From the repository root run `python3 all-about-ai/update_edition.py`. This checks the chapters, updates the offline download list and gives the shelf and reader a matching edition. To verify without changing files, run it with `--check`.
5. Open the bookshelf locally through a web server. Try search, a model table, a chapter link and an offline reload. Publish the changed files with the normal bookshelf update. On iPad, use the book’s download control on the shelf while online. On compact screens, tap Downloads first.

Use the review of Copilot to check Microsoft 365 licensing, Work IQ and GitHub agent availability. For Devin, check the Cloud and API release notes, Skills migration, plan restrictions and enterprise feature rollouts. Short chapter exercises use `exercise.prompt` and an `exercise.answer` array of paragraphs. A reader can reveal the answer while offline.

A two-to-three-week review can start with each vendor’s dated releases, then its model catalog, pricing and help pages. Chapters and citations are bundled with the book. Following an external source link requires an internet connection.

The six lab tracks follow the reference groups in `edition.json`. Each has a stable track key and a `content/labs-*.json` file. Keep the lab IDs stable so bookmarks and device-local completion counts survive edits. Each lab includes its prerequisites, role applications, opening prompt, guided steps, help per step, expected results and sources. Include copyable examples in the step’s optional `code` field.

For Devin lab 1, edit the kit’s source files in `practice/exchange-inventory/`. Run `pwsh -NoProfile -File all-about-ai/practice/exchange-inventory/Test-Inventory.ps1 -Script all-about-ai/practice/exchange-inventory/Reference/Get-MailboxInventory.ps1` from the repository root. The edition updater regenerates the downloadable ZIP and adds it to the offline cache.

Beginner lessons use the groups marked `guide`. Each action includes the exact task, an observable result and a recovery hint. Keep the opening links and chapter mappings in `guides.js` in step with vendor changes. Store a distinct worked example for every reference chapter and lab in `content/worked.json`. Add new pictures under `pictures/` and describe each in `content/figures.json` with a lesson ID, caption, accessible description, credit and official source. Identify public vendor demonstrations in the caption. Use synthetic material for practice examples.

After the edition updater, run `python3 all-about-ai/export_book.py` to refresh the book-only ZIP in `downloads/`. The ZIP includes a self-contained HTML reader that works without a web server and an editable site with the required shared files. Use `--check` to verify the artifact matches the current book.

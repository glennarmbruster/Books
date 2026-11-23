# Updating All About AI

Run `python3 update_edition.py` in this folder after an edit. It checks the content, rebuilds the practice ZIP, updates the offline file list and shelf edition, and writes both `Read All About AI.html` and the book-only ZIP in `../downloads/`. Run the same command with `--check` to verify those outputs without changing them.

## Validate the book you downloaded

Unzip the book. Open a terminal in **All About AI/Site/all-about-ai** and run `python3 update_edition.py --check` before editing. It checks the portable HTML one level above Site and matches the unpacked files to the package inventory. No local downloads directory is needed. If you edit this copy, run `python3 update_edition.py` in the same folder. It refreshes the top-level HTML, inventory and practice kit, and writes a new ZIP under Site/downloads. In the full bookshelf checkout the command still checks both the book-folder HTML and the required downloads ZIP.

## Update a model once

Open the vendor’s official model or price page. Change the matching value and source in `content/models.json`. Each record has a display value and the link supporting it. For a new value, give it a stable key. Use a reference such as `{{model.google.context}}` anywhere that needs to show it. The reader fills those references before it shows a page or builds its search index. The same catalog is in the portable reader. Update the catalog and group review dates in `edition.json` when you review them. Check the app and API separately.

## Teach and test

Keep chapter and lab IDs stable. Saved links and lab checkmarks use them. Each chapter introduces the tool and gives three uses, in order: Exchange, Microsoft 365 and Personal App. Start with a pretend example. Give a reader an action, a result they can see, and a fix when the result is wrong. Keep exact menu labels and commands. Explain any technical word a reader needs.

The seven original tool tracks have 30 labs each. The Troubleshoot M365 with AI track has 16 labs. Data safety at work and Ship a personal app each have six. The edition checker keeps the exact count and level order for each track. In the six older tracks, labs 1–15 keep their original order. Claude Code and Codex use Advanced for the shared build in Lab 14. Labs 16–30 start a new set of builds: six Starter, seven Intermediate, one Advanced and one Expert. Both halves of Gemini App & Gemini Notebook follow that pattern. Muse, Grok and Perplexity have reference chapters and illustrated first steps. They have no numbered lab tracks.

The four-tool build uses the prompt, checklist and follow-up stored in the build-off chapter in `content/field-comparisons.json`. Keep the prompt and checklist in each of the three matching Lab 14 files identical to the chapter. The edition check compares the actual text. First-try results and later edits have separate places on the scorecards.

Give each reference chapter and lab one entry in `content/worked.json`. Keep the six parts: starting problem, sample input, action, expected result, reason and recovery. Add figures under `pictures/` and list their page, caption, description, credit and source in `content/figures.json`. A book-made diagram may use a local chapter link. Put its title and description inside the SVG too. Use `also` to show a picture on related pages. Every reference chapter has a figure, as do labs 1, 15, 29 and 30 in each original track. Short tracks illustrate the opening and final two labs, plus lab 15 when present. Keep model names in figure captions linked to the catalog so they update with the text.

For a chapter with a pick-an-answer exercise, give each question a prompt, a list of choices, the index of the correct choice (starting at zero), and a short reason. The reader shows feedback after each pick, even offline.

Twenty Intermediate and Advanced labs in the original tracks include an optional `writeYourOwn` exercise. Give it a goal, small input and comparison tip. The reader shows the lab’s existing checks and keeps the supplied prompt behind a reveal while the reader writes. Preserve the original lab fields.

For new diagnostic or data-safety fixtures, add fictional text or CSV files in practice/exchange-inventory/cases. Lab `caseFiles` entries use just their filenames. The builder checks each path, packages the files in the practice ZIP, and makes the same evidence readable directly on an offline page. A new track must have its explicit count and ordered levels in the edition validator.

Use fictional roles, made-up notes and reserved example addresses. Review text inside pictures as well as their labels. Keep personal account names, employers, home folders, contact details and personal trip locations out of the book. A vendor’s name can still identify its product or documentation. Mark a teaching mock-up as a practice view.

## Check the offline files

Run the included Exchange exercise on practice data with the command below from this folder.

    pwsh -NoProfile -File practice/exchange-inventory/Test-Inventory.ps1 -Script practice/exchange-inventory/Reference/Get-MailboxInventory.ps1

Open the portable HTML with the network off. Try a model search, an enlarged diagram, a Deep Research lab, a Notebook citation lab, the tap game and the fake mailbox tally. For the hosted book, first wait for Ready offline, then turn the network off and reload.

## Monthly reference review

1. Unzip the latest book and keep a backup beside Site. From Site/all-about-ai, run `python3 update_edition.py --check` before editing. Keep the same _work folder between reviews so the source checker can compare months.
2. Run `python3 verify_sources.py`. It reads every citation in the content folder, including model sources and picture credits. Its dated Markdown report and text fingerprints stay in _work beside Site. A first run creates the baseline. A blocked site needs a manual visit. A new fingerprint means the wording may have changed. Open the affected page and read the relevant passage.
3. Open **Claude: full potential**. Review access for chat, Projects, Artifacts, Claude Code, connectors, computer and browser use, scheduled tasks, voice and uploads. Start with the [Claude Help Center](https://support.claude.com/) and the [Claude Code overview](https://code.claude.com/docs/en/overview). Follow each section’s exact source. Check personal and managed accounts separately.
4. Open **Gemini: full potential**. Check Gemini Apps, Notebook, Canvas, Antigravity, Connected Apps, Chrome auto browse, Tasks, Live and attachments. Use [Gemini Apps Help](https://support.google.com/gemini/), [Gemini Notebook Help](https://support.google.com/gemininotebook/) and the [Antigravity setup guide](https://antigravity.google/docs/getting-started/). Check region, platform, sign-in and plan before changing a limit.
5. Open **Which tool for which job** and **Prompt library**. Revisit the cited OpenAI, Microsoft and Devin pages for file analysis, work-data permissions and scheduling. Try a fictional example when a workflow changes. Keep the prompts, tool labels and linked chapters in agreement. For names, prices and model limits, review the official link for the field in models.json. Update that catalog’s own review date only after checking it.
6. Edit the verified facts and their section sources. Keep each chapter ID. Keep unresolved questions in the chapter’s unverified list, and give each unresolved detail a dated “Not verified” line in the relevant section. To record a human review, run `python3 update_edition.py --review claude-reference-projects --date YYYY-MM-DD --note "Checked project access and the free account allowance."` Replace the date and note with the actual review. This updates the chapter, its group, the edition date as needed, and What changed. An ordinary build preserves review dates. A source check alone does not confirm a product claim.
7. If you want automated link notices in the book, explicitly run `python3 verify_sources.py --record`. Use `--help` for options. It adds source-status notices only. The normal audit writes outside Site. Review any notice before revising a chapter.
8. Run `python3 update_edition.py` and `python3 update_edition.py --check`. Open the portable reader with the network off. Search for a prompt and a feature name. Open a tag and follow its chapter. Repeat on the hosted reader after “Ready offline” appears. Reconnect and test Check source and Search official docs. Keep the report and snapshot for next month.

The checker reads public HTML and text without logging in or running page scripts. A PDF, an app shell, a login screen, or a blocked request needs manual inspection. A sign-in redirect with temporary private parameters is recorded only as its public address. A failed request keeps its previous good fingerprint.

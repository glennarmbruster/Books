# Updating All About AI

Run `python3 update_edition.py` in this folder after an edit. It checks the content, rebuilds the practice ZIP, updates the offline file list and shelf edition, and writes both `Read All About AI.html` and the book-only ZIP in `../downloads/`. Run the same command with `--check` to verify those outputs without changing them.

## Update a model once

Open the vendor’s official model or price page. Change the matching value and source in `content/models.json`. Each record has a display value and the link supporting it. For a new value, give it a stable key. Use a reference such as `{{model.google.context}}` anywhere that needs to show it. The reader fills those references before it shows a page or builds its search index. The same catalog is in the portable reader. Update the catalog and group review dates in `edition.json` when you review them. Check the app and API separately.

## Teach and test

Keep chapter and lab IDs stable. Saved links and lab checkmarks use them. Each chapter introduces the tool and gives three uses, in order: Exchange, Microsoft 365 and Personal App. Start with a pretend example. Give a reader an action, a result they can see, and a fix when the result is wrong. Keep exact menu labels and commands. Explain any technical word a reader needs.

There are seven lab files with 30 labs each. In the six older tracks, labs 1–15 keep their original order. Claude Code and Codex use Advanced for the shared build in Lab 14. Labs 16–30 start a new set of builds: six Starter, seven Intermediate, one Advanced and one Expert. Both halves of Gemini App & Gemini Notebook follow that pattern. Muse, Grok and Perplexity have reference chapters and illustrated first steps. They have no numbered lab tracks.

The four-tool build uses the prompt, checklist and follow-up stored in the build-off chapter in `content/field-comparisons.json`. Keep the prompt and checklist in each of the three matching Lab 14 files identical to the chapter. The edition check compares the actual text. First-try results and later edits have separate places on the scorecards.

Give each reference chapter and lab one entry in `content/worked.json`. Keep the six parts: starting problem, sample input, action, expected result, reason and recovery. Add figures under `pictures/` and list their page, caption, description, credit and source in `content/figures.json`. A book-made diagram may use a local chapter link. Put its title and description inside the SVG too. Use `also` to show a picture on related pages. Every reference chapter has a figure, as do labs 1, 15, 29 and 30 in each track. Keep model names in figure captions linked to the catalog so they update with the text.

For a chapter with a pick-an-answer exercise, give each question a prompt, a list of choices, the index of the correct choice (starting at zero), and a short reason. The reader shows feedback after each pick, even offline.

Use fictional roles, made-up notes and reserved example addresses. Review text inside pictures as well as their labels. Keep personal account names, employers, home folders, contact details and personal trip locations out of the book. A vendor’s name can still identify its product or documentation. Mark a teaching mock-up as a practice view.

## Check the offline files

Run the included Exchange exercise on practice data with the command below from this folder.

    pwsh -NoProfile -File practice/exchange-inventory/Test-Inventory.ps1 -Script practice/exchange-inventory/Reference/Get-MailboxInventory.ps1

Open the portable HTML with the network off. Try a model search, an enlarged diagram, a Deep Research lab, a Notebook citation lab, the tap game and the fake mailbox tally. For the hosted book, first wait for Ready offline, then turn the network off and reload.

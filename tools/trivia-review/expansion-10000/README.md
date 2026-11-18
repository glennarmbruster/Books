# Reviewed release: 2,500 new questions

The user chose one complete release of **2,500 new questions**, revising the original 10,000-question threshold. The playable book now contains **22,600** questions. This folder holds editorial records; the book loads the accepted content from `weird-facts-trivia/data/reviewed-002.js`, and excludes these research records from its offline download.

The new questions occupy permanent numbers **20,101–22,600**. The original 20,100 question records are unchanged. The long-term ceiling remains 100,000. New games still default to 70% easy, 10% medium, 10% hard and 10% obscure; the collection's difficulty labels are independent estimates for adult players.

The November 17 release contains **2,500 accepted questions**. Fifty rejected staged candidates and additional research replacements remain documented. Full-release editorial review and integration checks passed; see `reviews/release-review.json`, `reviews/release-validation.json` and `release-mapping.json`.

Historical research snapshots remain in `research-in-progress/`. All final research sets have been imported. Canonical `candidates/` records include later wording corrections and source repairs; never overwrite them from these snapshots.

## Continuing this work

Read `progress.json`, `plan.json` and the candidate files before adding anything. Candidate IDs are stable editorial IDs, not published folio numbers. Preserve rejected candidates and their reasons so the same weak or repeated facts are not suggested again.

Every candidate includes an original question, answer, explanation, direct source link, four choices and a review record. Review states have distinct meanings:

- **draft:** written but not yet source-checked.
- **source-checked:** the supporting reference has been read; editorial acceptance is still pending.
- **accepted:** source review, wording, difficulty, choices and underlying-fact overlap have been checked. A content fingerprint makes later edits require another review.
- **rejected:** retained for the audit trail; it does not count toward the release.

Acceptance alone does not publish a question; this release's accepted questions have also passed integration checks. Acceptance is an editorial judgment, not a guarantee of perfection. Similarity checks can miss paraphrases, so read the question, answer and explanation, including related questions about the same subject. A new species, new wording or reversed question is not automatically a new fact. Remove obvious giveaway wording and distractors that turn an adult question into a trivial elimination exercise.

Prefer stable, curious facts from museums, universities, research institutions, official cultural organizations and other direct references. Avoid repeating one fact in multiple forms to fill a quota. Specialist names should receive an honest difficulty label. Do not import the unreviewed archival pools from earlier research.

Keep correct choices in varied positions. The current application displays their stored order. Use natural, concise answers for letter games; avoid unnecessary opening articles, but retain official titles. Do not manipulate wording to manufacture rare-letter coverage. Source URLs must be the exact pages read, not guessed paths. An HTTP access block does not prove a source is incorrect; retain the evidence and revisit unresolved links at the final review.

## Checks

From the repository root:

```sh
node tools/check-trivia-expansion.cjs
node tools/find-trivia-overlaps.cjs > /tmp/trivia-overlaps.json
```

The first command reports real progress and checks evidence records, options, category names, exact duplicates, the unchanged published baseline and accepted-card fingerprints. The second produces a **triage report**, not proof of semantic uniqueness. Examine nearby facts manually.

```sh
node tools/check-trivia-expansion.cjs --require-ready
```

This requires exactly 2,500 accepted questions and validates their content fingerprints. The full release also passed `check-trivia-bank.cjs`, `check-trivia-mix.cjs`, `check-trivia-release.cjs` and `check-trivia-offline-upgrade.cjs`. The browser test upgraded the old offline edition and preserved a saved letter round before exercising new questions without a connection.

This folder records saved work. It does not schedule work or make research continue automatically between chats.

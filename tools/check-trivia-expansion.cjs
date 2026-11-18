// Validate saved editorial work without loading it into the published book.
// --require-ready fails until the entire requested expansion is accepted.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {createHash} = require('node:crypto');
const root = path.join(__dirname, '..');
const dir = path.join(__dirname, 'trivia-review', 'expansion-10000');
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json'), 'utf8'));
const book = path.join(root, 'weird-facts-trivia');
const html = fs.readFileSync(path.join(book, 'index.html'), 'utf8');
const ctx = vm.createContext({window: {TRIVIA_CATEGORIES: []}});
for (const [, file] of html.matchAll(/src="(data\/[^"<>]+\.js)"/g)) {
  vm.runInContext(fs.readFileSync(path.join(book, file), 'utf8'), ctx);
}
const loaded = ctx.window.TRIVIA_CATEGORIES.flatMap(b => b.cards.map((r, i) => ({id: b.start + i, r})));
// Keep validating the immutable baseline after the reviewed release is integrated.
const published = loaded.filter(c => c.id <= plan.publishedBaseline);
assert.ok(loaded.length === plan.publishedBaseline || loaded.length === plan.lastFutureQuestion,
  'Unexpected partial integration or a changed release size');
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const publishedDigest = digest(published.slice().sort((a, b) => a.id - b.id));
const norm = s => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const known = new Map(published.map(c => [norm(c.r[0]), `published #${c.id}`]));
const categories = new Set(ctx.window.TRIVIA_CATEGORIES.map(c => c.name));
const input = path.join(dir, 'candidates');
const candidates = fs.existsSync(input) ? fs.readdirSync(input).filter(f => f.endsWith('.json')).sort()
  .flatMap(f => JSON.parse(fs.readFileSync(path.join(input, f), 'utf8'))) : [];
const ids = new Set(), counts = {draft: 0, 'source-checked': 0, accepted: 0, rejected: 0};
const levels = {}, categoryCounts = {}, sources = new Set();
const answerPositions = [0, 0, 0, 0], answerInitials = {};
for (const c of candidates) {
  assert.ok(c.candidateId && !ids.has(c.candidateId), 'Missing/duplicate candidate ID');
  ids.add(c.candidateId);
  assert.ok(Object.hasOwn(counts, c.review?.status), `Unknown review status: ${c.candidateId}`);
  counts[c.review.status]++;
  if (c.review.status === 'rejected') {
    assert.ok(c.review.rejectionReason?.trim(), `${c.candidateId}: rejection reason missing`);
    continue;
  }
  for (const k of ['q', 'a', 'd', 's', 'u', 'cat', 'level']) assert.ok(typeof c[k] === 'string' && c[k].trim(), `${c.candidateId}: missing ${k}`);
  assert.ok(categories.has(c.cat), `${c.candidateId}: unknown category ${c.cat}`);
  assert.ok(['easy', 'medium', 'hard', 'obscure'].includes(c.level), `${c.candidateId}: invalid difficulty`);
  assert.equal(new URL(c.u).protocol, 'https:');
  assert.equal(c.choices?.length, 4, `${c.candidateId}: four choices required`);
  assert.equal(new Set(c.choices.map(norm)).size, 4, `${c.candidateId}: repeated options`);
  assert.equal(c.choices.filter(x => x === c.a).length, 1, `${c.candidateId}: answer must appear exactly once`);
  assert.ok(!known.has(norm(c.q)), `${c.candidateId}: repeated question (${known.get(norm(c.q))})`);
  known.set(norm(c.q), c.candidateId);
  if (c.review.status !== 'draft') {
    assert.equal(c.review.sourceUrl, c.u, `${c.candidateId}: source evidence must match card`);
    assert.match(c.review.sourceCheckedOn, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(c.review.supportingFact?.trim(), `${c.candidateId}: source evidence missing`);
  }
  if (c.review.status === 'accepted') {
    assert.ok(c.review.editorialNotes?.trim(), `${c.candidateId}: editorial review missing`);
    assert.ok(c.review.duplicateNotes?.trim(), `${c.candidateId}: underlying-fact duplicate review missing`);
    assert.equal(c.review.comparedAgainstPublishedCount, plan.publishedBaseline);
    assert.equal(c.review.contentSha256, digest(['q','a','d','s','u','cat','level','choices'].map(k => c[k])),
      `${c.candidateId}: card changed since editorial acceptance; re-review it`);
    sources.add(c.u);
    levels[c.level] = (levels[c.level] || 0) + 1;
    categoryCounts[c.cat] = (categoryCounts[c.cat] || 0) + 1;
    answerPositions[c.choices.indexOf(c.a)]++;
    const initial = norm(c.a)[0]?.toUpperCase() || '?';
    answerInitials[initial] = (answerInitials[initial] || 0) + 1;
  }
}
assert.equal(plan.lastFutureQuestion - plan.firstFutureQuestion + 1, plan.targetNewQuestions);
assert.equal(plan.firstFutureQuestion, plan.publishedBaseline + 1);
assert.equal(published.length, plan.publishedBaseline, 'Published bank changed; recheck candidate overlap before accepting more');
assert.equal(publishedDigest, plan.publishedContentSha256, 'Published content changed; recheck the baseline before accepting more');
assert.ok(counts.accepted <= plan.targetNewQuestions, 'Expansion exceeds its release target');
// Editorial candidates must stay out of the application and its offline download.
for (const file of ['index.html', 'sw.js']) {
  assert.ok(!fs.readFileSync(path.join(book, file), 'utf8').includes('expansion-10000'), `Editorial files leaked into ${file}`);
}
const readyForIntegration = counts.accepted === plan.targetNewQuestions;
console.log(JSON.stringify({baselineQuestions: published.length, playableQuestions: loaded.length, targetNewQuestions: plan.targetNewQuestions,
  staged: candidates.length, statusCounts: counts, remainingToAccept: plan.targetNewQuestions - counts.accepted,
  acceptedSourceCount: sources.size, acceptedDifficultyCounts: levels, acceptedCategoryCounts: categoryCounts,
  acceptedCorrectAnswerPositions: answerPositions, acceptedAnswerInitialCounts: answerInitials,
  readyForIntegration, integrated: loaded.length === plan.lastFutureQuestion}, null, 2));
if (process.argv.includes('--require-ready')) {
  assert.ok(readyForIntegration, `Release held: ${counts.accepted} of ${plan.targetNewQuestions} new questions accepted.`);
}

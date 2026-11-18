// Validate the held 7,400-question expansion without changing the playable book.
// Structural checks and lexical overlap scores are aids, not editorial approval.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const dir = path.join(__dirname, 'trivia-review/expansion-7400');
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json')));
const ctx = vm.createContext({window: {TRIVIA_CATEGORIES: []}});
for (const [, file] of fs.readFileSync(path.join(root, 'weird-facts-trivia/index.html'), 'utf8').matchAll(/src="(data\/[^"<>]+\.js)"/g)) {
  vm.runInContext(fs.readFileSync(path.join(root, 'weird-facts-trivia', file), 'utf8'), ctx);
}
const published = ctx.window.TRIVIA_CATEGORIES.flatMap(b => b.cards.map((r, i) => ({
  id: b.start + i, cat: b.name, q: r[0], a: r[1], d: r[2] || '', record: r
}))).filter(c => c.id <= plan.baseline).sort((a, b) => a.id - b.id);
assert.equal(published.length, plan.baseline);
published.forEach((c, i) => assert.equal(c.id, i + 1));
const baselineSha256 = crypto.createHash('sha256').update(JSON.stringify(published)).digest('hex');
if (plan.baselineSha256) assert.equal(baselineSha256, plan.baselineSha256, 'Published baseline changed');
const files = ['culture.json', 'nature.json', 'objects.json', 'science.json'];
const candidates = files.flatMap(file => fs.existsSync(path.join(dir, file))
  ? JSON.parse(fs.readFileSync(path.join(dir, file))).map((c, i) => ({...c, file, row: i + 1})) : []);
const norm = s => String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const active = candidates.filter(c => c.review?.status !== 'rejected');
const errors = [], prompts = new Map(published.map(c => [norm(c.q), `published-${c.id}`])), ids = new Set();
for (const c of active) {
  const key = c.candidateId || `${c.file}:${c.row}`;
  const fail = message => errors.push({id: key, message});
  for (const field of ['q', 'a', 'd', 'cat', 'level', 's', 'u']) if (typeof c[field] !== 'string' || !c[field].trim()) fail(`Missing ${field}`);
  if (!c.candidateId) fail('Missing stable candidateId');
  else if (ids.has(c.candidateId)) fail('Duplicate candidateId');
  ids.add(c.candidateId);
  if (!Array.isArray(c.choices) || c.choices.length !== 4 || new Set(c.choices.map(norm)).size !== 4 || c.choices.filter(v => v === c.a).length !== 1) fail('Four distinct choices and one exact answer required');
  if (!['easy', 'medium', 'hard', 'obscure'].includes(c.level)) fail('Invalid difficulty');
  if (!['draft', 'source-checked', 'accepted'].includes(c.review?.status)) fail('Invalid review status');
  if (!c.evidence || JSON.stringify(c.evidence).length < 12) fail('Missing source evidence');
  if (!/^https:\/\//.test(c.u)) fail('Missing HTTPS source');
  const prompt = norm(c.q);
  if (prompts.has(prompt)) fail(`Repeated question: ${prompts.get(prompt)}`);
  prompts.set(prompt, key);
}
const countBy = (rows, fn) => rows.reduce((out, c) => {const key = fn(c); out[key] = (out[key] || 0) + 1; return out;}, {});
const accepted = active.filter(c => c.review.status === 'accepted');
const summary = {
  baseline: plan.baseline, baselineSha256, targetTotal: plan.targetTotal,
  requiredAdditions: plan.targetNewQuestions, staged: candidates.length,
  statusCounts: countBy(candidates, c => c.review?.status || 'missing'),
  accepted: accepted.length, remainingToAccept: Math.max(0, plan.targetNewQuestions - accepted.length),
  acceptedByFile: countBy(accepted, c => c.file), errors,
  note: 'Acceptance records are editorial decisions. Structural validation and overlap scores never approve a question.'
};
const outArg = process.argv.indexOf('--output');
if (outArg !== -1) {
  assert.ok(process.argv[outArg + 1], '--output requires a path');
  fs.writeFileSync(process.argv[outArg + 1], JSON.stringify(summary, null, 2) + '\n');
}
const overlapArg = process.argv.indexOf('--overlaps');
if (overlapArg !== -1) {
  assert.ok(process.argv[overlapArg + 1], '--overlaps requires an output path');
  const stop = new Set('a an the of on in into to for by with and or as from its it is was are were has have had which what who where when how why this that these those their there they than then at about also can could would did do does called known name named one two first most more other some many much after before rather during each over under through his her he she them not only itself such now made used'.split(' '));
  const all = [...published.map(c => ({...c, candidateId: `published-${c.id}`})), ...active];
  const terms = all.map(c => new Set(norm(c.q + ' ' + c.a + ' ' + c.d).split(' ').map(t => t.length > 5 && t.endsWith('s') ? t.slice(0, -1) : t).filter(t => t.length > 2 && !stop.has(t))));
  const postings = new Map();
  terms.forEach((tokens, i) => tokens.forEach(t => {if (!postings.has(t)) postings.set(t, []); postings.get(t).push(i);}));
  const weights = new Map([...postings].map(([t, rows]) => [t, Math.log(1 + all.length / rows.length)]));
  const totals = terms.map(tokens => [...tokens].reduce((sum, t) => sum + weights.get(t), 0));
  const rows = active.map((c, offset) => {
    const i = published.length + offset, scores = new Map();
    for (const t of terms[i]) for (const j of postings.get(t)) if (j !== i) scores.set(j, (scores.get(j) || 0) + weights.get(t));
    const matches = [...scores].map(([j, shared]) => ({j, similarity: 2 * shared / (totals[i] + totals[j])})).sort((a, b) => b.similarity - a.similarity).slice(0, 4);
    return {id: c.candidateId, q: c.q, a: c.a, d: c.d, matches: matches.map(({j, similarity}) => ({id: all[j].candidateId, similarity: +similarity.toFixed(3), q: all[j].q, a: all[j].a, d: all[j].d}))};
  });
  fs.writeFileSync(process.argv[overlapArg + 1], JSON.stringify({note: 'Editorial triage, not proof of uniqueness.', candidates: rows}, null, 2) + '\n');
}
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--require-ready')) {
  assert.equal(errors.length, 0, 'Fix structural errors first');
  assert.equal(accepted.length, plan.targetNewQuestions, 'The complete reviewed batch is not ready');
  const review = JSON.parse(fs.readFileSync(path.join(dir, 'release-review.json')));
  assert.equal(review.complete, true, 'Complete the combined release review');
  assert.equal(review.count, plan.targetNewQuestions);
}
if (errors.length) process.exitCode = 1;

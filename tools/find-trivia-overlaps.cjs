// Editorial aid only: lexical similarity can flag overlaps, never approve uniqueness.
// Prints the closest published/staged facts for each active candidate as JSON.
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const root = path.join(__dirname, '..'), book = path.join(root, 'weird-facts-trivia');
const ctx = vm.createContext({window: {TRIVIA_CATEGORIES: []}});
for (const [, f] of fs.readFileSync(path.join(book, 'index.html'), 'utf8').matchAll(/src="(data\/[^"<>]+\.js)"/g)) {
  vm.runInContext(fs.readFileSync(path.join(book, f), 'utf8'), ctx);
}
const plan = JSON.parse(fs.readFileSync(path.join(__dirname, 'trivia-review/expansion-10000/plan.json')));
// Once integrated, the same staged cards also exist in the app. Compare this
// release against its original baseline, not against its own published copies.
const old = ctx.window.TRIVIA_CATEGORIES.flatMap(b => b.cards.map((r, i) => ({
  candidateId: `published-${b.start + i}`, q: r[0], a: r[1], d: r[2] || ''
}))).filter(c => Number(c.candidateId.slice('published-'.length)) <= plan.publishedBaseline);
const dir = path.join(__dirname, 'trivia-review', 'expansion-10000', 'candidates');
const staged = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()
  .flatMap(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))
  .filter(c => c.review.status !== 'rejected') : [];
// Include unfinished research for comparison without moving it into the release candidates.
// Usage: --extra-file /absolute/path/drafts.json [--extra-file ...] [--only-extra]
const extra = [];
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] !== '--extra-file') continue;
  const file = process.argv[++i];
  if (!file) throw new Error('--extra-file requires a JSON file path');
  const rows = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(rows)) throw new Error(`Expected an array in ${file}`);
  rows.forEach((c, index) => extra.push({...c,
    candidateId: `research-${path.basename(file, '.json')}-${String(index + 1).padStart(4, '0')}`}));
}
const added = [...staged, ...extra];
const norm = s => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const stop = new Set(('a an the of on in into to for by with and or as from its it is was are were has have had ' +
  'which what who where when how why this that these those their there they than then at about also can could ' +
  'would did do does called known name named one two first most more other some many much after before ' +
  'rather during each over under through his her he she them his not only itself such now made used').split(' '));
function terms(c) {
  return new Set(norm(c.q + ' ' + c.a + ' ' + c.d).split(' ').map(w => w.length > 5 && w.endsWith('s') ? w.slice(0, -1) : w)
    .filter(w => w.length > 2 && !stop.has(w)));
}
const all = [...old, ...added], tokenSets = all.map(terms), postings = new Map();
tokenSets.forEach((ts, i) => { for (const t of ts) { if (!postings.has(t)) postings.set(t, []); postings.get(t).push(i); } });
const weights = new Map([...postings].map(([t, docs]) => [t, Math.log(1 + all.length / docs.length)]));
const totals = tokenSets.map(ts => [...ts].reduce((sum, t) => sum + weights.get(t), 0));
const answers = new Map();
const answerKey = c => norm(c.a).replace(/^(the|an|a) /, '');
all.forEach((c, i) => { const k = answerKey(c); if (!answers.has(k)) answers.set(k, []); answers.get(k).push(i); });
const report = added.map((c, offset) => {
  const i = old.length + offset, scores = new Map();
  for (const t of tokenSets[i]) for (const j of postings.get(t)) {
    if (j !== i) scores.set(j, (scores.get(j) || 0) + weights.get(t));
  }
  const top = [...scores].map(([j, common]) => ({j, score: 2 * common / (totals[i] + totals[j])}))
    .sort((a, b) => b.score - a.score).slice(0, 4);
  for (const j of answers.get(answerKey(c)) || []) {
    if (j !== i && !top.some(x => x.j === j)) top.push({j, score: 2 * (scores.get(j) || 0) / (totals[i] + totals[j])});
  }
  return {id: c.candidateId, q: c.q, a: c.a, d: c.d, matches: top.map(({j, score}) => ({
    id: all[j].candidateId, similarity: +score.toFixed(3), sameAnswer: answerKey(c) === answerKey(all[j]),
    q: all[j].q, a: all[j].a, d: all[j].d
  }))};
});
console.log(JSON.stringify({note: 'Triage only. Read questions and explanations; matching words are not matching facts, and low overlap does not prove uniqueness.',
  publishedCount: old.length, candidateCount: staged.length, researchCount: extra.length,
  candidates: process.argv.includes('--only-extra') ? report.slice(staged.length) : report}, null, 2));

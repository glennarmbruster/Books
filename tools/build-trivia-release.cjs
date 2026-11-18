// Build the reviewed release only after its complete editorial review is recorded.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const root = path.join(__dirname, '..');
const dir = path.join(__dirname, 'trivia-review/expansion-10000');
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json')));
const review = JSON.parse(fs.readFileSync(path.join(dir, 'reviews/release-review.json')));
assert.equal(review.complete, true, 'Complete the editorial release review first');
execFileSync(process.execPath, [path.join(__dirname, 'check-trivia-expansion.cjs'), '--require-ready']);
const accepted = fs.readdirSync(path.join(dir, 'candidates')).filter(f => f.endsWith('.json')).sort()
  .flatMap(f => JSON.parse(fs.readFileSync(path.join(dir, 'candidates', f))))
  .filter(c => c.review.status === 'accepted').sort((a,b) => a.candidateId.localeCompare(b.candidateId));
// Mix subjects across consecutive folios, then keep this edition's mapping fixed.
let seed = 22600;
for (let i=accepted.length-1; i>0; i--) {
  seed = (Math.imul(seed,1664525)+1013904223)>>>0;
  const j = Math.floor(seed / 4294967296 * (i+1));
  [accepted[i],accepted[j]] = [accepted[j],accepted[i]];
}
const mapping = accepted.map((c,i) => ({candidateId:c.candidateId, question:plan.firstFutureQuestion+i}));
const batches = accepted.map((c,i) => ({name:c.cat,start:plan.firstFutureQuestion+i,
  cards:[[c.q,c.a,c.d,c.s,c.u,null,true,c.level,c.choices]]}));
const output = '// Original questions with per-card evidence and review records in tools/trivia-review.\nwindow.TRIVIA_CATEGORIES.push(\n' + batches.map(b => '  '+JSON.stringify(b)).join(',\n') + '\n);\n';
fs.writeFileSync(path.join(root,'weird-facts-trivia/data/reviewed-002.js'),output);
fs.writeFileSync(path.join(dir,'release-mapping.json'),JSON.stringify(mapping,null,2)+'\n');
const counts = key => accepted.reduce((a,c) => (a[c[key]]=(a[c[key]]||0)+1,a),{});
fs.writeFileSync(path.join(__dirname,'trivia-review/batch-002.json'),JSON.stringify({
  reviewDate:review.reviewedOn,firstQuestion:plan.firstFutureQuestion,lastQuestion:plan.lastFutureQuestion,
  count:accepted.length,sourceCount:new Set(accepted.map(c=>c.u)).size,
  difficultyCounts:counts('level'),categoryCounts:counts('cat'),
  releaseStrategy:'2,500 reviewed questions; user revised the original 10,000-question release threshold.',
  checks:review.checks
},null,2)+'\n');
function edit(file,fn) {const p=path.join(root,file);fs.writeFileSync(p,fn(fs.readFileSync(p,'utf8')));}
edit('weird-facts-trivia/index.html',s=>s.replace('href="#question/20001">New: 100 reviewed questions','href="#question/20101">New: 2,500 reviewed questions')
  .replace(/<script src="data\/reviewed-001.js"><\/script>(?:<script src="data\/reviewed-002.js"><\/script>)?/,'<script src="data/reviewed-001.js"></script><script src="data/reviewed-002.js"></script>'));
edit('weird-facts-trivia/sw.js',s=>s.replace("'trivia-8'","'trivia-9'").replace(/'data\/reviewed-001.js',(?:'data\/reviewed-002.js',)?/,"'data/reviewed-001.js','data/reviewed-002.js',"));
edit('index.html',s=>s.replace('data-edition="trivia-8"','data-edition="trivia-9"').replace('20,100 questions','22,600 questions'));
edit('README.md',s=>s.replace('20,100 sourced questions','22,600 sourced questions'));
edit('weird-facts-trivia/credits.html',s=>s.replace('Questions 20,001–20,100 are an original batch of 100 questions','Questions 20,001–22,600 are original additions published in reviewed batches').replace(/checked against the references linked on each card\.(?: The latest release adds 2,500 questions, numbered 20,101–22,600\.)?/,'checked against the references linked on each card. The latest release adds 2,500 questions, numbered 20,101–22,600.'));
console.log('Built 2,500 reviewed additions; total 22,600. Run release and offline checks before publishing.');

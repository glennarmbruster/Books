// Prepare the complete 30,000-question edition only after editorial approval.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const dir = path.join(__dirname, 'trivia-review/expansion-7400');
const plan = JSON.parse(fs.readFileSync(path.join(dir, 'plan.json')));
execFileSync(process.execPath, [path.join(__dirname, 'check-trivia-30000.cjs'), '--require-ready'], {stdio:'inherit'});
const review = JSON.parse(fs.readFileSync(path.join(dir, 'release-review.json')));
const accepted = ['culture.json','nature.json','objects.json','science.json']
  .flatMap(f => JSON.parse(fs.readFileSync(path.join(dir,f))))
  .filter(c => c.review.status === 'accepted')
  .sort((a,b) => a.candidateId.localeCompare(b.candidateId));
const fingerprint = crypto.createHash('sha256').update(JSON.stringify(accepted)).digest('hex');
assert.equal(fingerprint, review.candidatesSha256, 'Candidates changed after the combined review');
assert.equal(accepted.length, 7400);
assert.equal(plan.firstFutureQuestion, 22601);
assert.equal(plan.lastFutureQuestion, 30000);
let seed = 30000;
for (let i = accepted.length - 1; i > 0; i--) {
  seed = (Math.imul(seed,1664525) + 1013904223) >>> 0;
  const j = Math.floor(seed / 4294967296 * (i+1));
  [accepted[i],accepted[j]] = [accepted[j],accepted[i]];
}
const mapping = accepted.map((c,i) => ({candidateId:c.candidateId,question:22601+i}));
const mappingPath = path.join(dir,'release-mapping.json');
if (fs.existsSync(mappingPath)) assert.deepEqual(JSON.parse(fs.readFileSync(mappingPath)), mapping, 'Do not renumber an existing edition');
const batches = accepted.map((c,i) => ({name:c.cat,start:22601+i,cards:[[c.q,c.a,c.d,c.s,c.u,null,true,c.level,c.choices]]}));
const writes = new Map();
writes.set('weird-facts-trivia/data/reviewed-003.js', '// Reviewed additions; evidence and attribution in tools/trivia-review/expansion-7400.\nwindow.TRIVIA_CATEGORIES.push(\n'+batches.map(b=>'  '+JSON.stringify(b)).join(',\n')+'\n);\n');
function edit(file,oldText,newText) {
  const content = writes.get(file) ?? fs.readFileSync(path.join(root,file),'utf8');
  if (!content.includes(oldText)) {
    assert.ok(content.includes(newText), `Missing expected text in ${file}`);
    return;
  }
  assert.equal(content.split(oldText).length,2,`Ambiguous replacement in ${file}`);
  writes.set(file,content.replace(oldText,newText));
}
edit('weird-facts-trivia/index.html','href="#question/20101">New: 2,500 reviewed questions','href="#question/22601">New: 7,400 reviewed questions');
const script = '<script src="data/reviewed-003.js"></script>';
if (!fs.readFileSync(path.join(root,'weird-facts-trivia/index.html'),'utf8').includes(script))
  edit('weird-facts-trivia/index.html','<script src="data/reviewed-002.js"></script>','<script src="data/reviewed-002.js"></script>'+script);
edit('weird-facts-trivia/sw.js',"const edition='trivia-10'","const edition='trivia-11'");
if (!fs.readFileSync(path.join(root,'weird-facts-trivia/sw.js'),'utf8').includes("'data/reviewed-003.js'"))
  edit('weird-facts-trivia/sw.js',"'data/reviewed-002.js',","'data/reviewed-002.js','data/reviewed-003.js',");
edit('index.html','data-edition="trivia-10"','data-edition="trivia-11"');
edit('index.html','22,600 questions','30,000 questions');
edit('README.md','22,600 sourced questions','30,000 sourced questions');
edit('weird-facts-trivia/credits.html','Questions 20,001–22,600 are original additions','Questions 20,001–30,000 are additions');
edit('weird-facts-trivia/credits.html','The latest release adds 2,500 questions, numbered 20,101–22,600.','The latest release adds 7,400 questions, numbered 22,601–30,000, with per-card sources.');
const referenceCredits = '<h2>Museums and heritage</h2><p>Selected questions use the Cleveland Museum of Art’s <a href="https://www.clevelandart.org/open-access">CC0 open-access collection data</a>. Heritage questions adapt UNESCO’s <a href="https://data.unesco.org/explore/dataset/whc001/">World Heritage List</a> and <a href="https://data.unesco.org/explore/dataset/ich001/">Intangible Heritage List</a> datasets. These UNESCO adaptations use original question wording and are distributed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, with attribution to UNESCO and a link to the relevant entry on each card. Science Museum Group collection-record adaptations credit the museum on each card and use its <a href="https://collection.sciencemuseumgroup.org.uk/">CC BY 4.0 open collection data</a>; question wording has been adapted. Other museum, scientific and educational references are credited on their individual cards. No endorsement by these institutions is implied.</p>\n';
if (!fs.readFileSync(path.join(root,'weird-facts-trivia/credits.html'),'utf8').includes('<h2>Museums and heritage</h2>'))
  edit('weird-facts-trivia/credits.html','<h2>Trivia collections</h2>',referenceCredits+'<h2>Trivia collections</h2>');
const counts = key => accepted.reduce((out,c) => (out[c[key]]=(out[c[key]]||0)+1,out),{});
writes.set('tools/trivia-review/batch-003.json',JSON.stringify({reviewDate:review.reviewedOn,firstQuestion:22601,lastQuestion:30000,count:7400,sourceCount:new Set(accepted.map(c=>c.u)).size,difficultyCounts:counts('level'),categoryCounts:counts('cat'),releaseStrategy:'Complete reviewed expansion to 30,000 questions.',checks:review.checks},null,2)+'\n');
writes.set('tools/trivia-review/expansion-7400/release-mapping.json',JSON.stringify(mapping,null,2)+'\n');
// All inputs and expected replacements have been checked before any live file changes.
for (const [file,text] of writes) fs.writeFileSync(path.join(root,file),text);
console.log('Built the 30,000-question edition locally. Run integration and offline checks before publishing.');

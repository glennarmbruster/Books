// Run with Node after adding or editing reviewed trivia.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'),book=path.join(root,'weird-facts-trivia');
const ctx=vm.createContext({window:{TRIVIA_CATEGORIES:[]}});
for(const [,file] of fs.readFileSync(path.join(book,'index.html'),'utf8').matchAll(/src="(data\/[^"]+\.js)"/g))vm.runInContext(fs.readFileSync(path.join(book,file),'utf8'),ctx);
const policy=JSON.parse(fs.readFileSync(path.join(__dirname,'trivia-editorial-policy.json')));
const review=JSON.parse(fs.readFileSync(path.join(__dirname,'trivia-review/batch-001.json')));
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const all=ctx.window.TRIVIA_CATEGORIES.flatMap(b=>b.cards.map((r,i)=>({id:b.start+i,cat:b.name,r}))).sort((a,b)=>a.id-b.id);
assert.ok(all.length<=policy.maximumQuestions);const prompts=new Set();
for(const [i,{id,r}] of all.entries()){
 assert.equal(id,i+1,'Missing or duplicate folio');assert.ok(r[0]&&r[1]&&r[3]&&r[4].startsWith('https://'),'Incomplete card '+id);
 assert.ok(!prompts.has(norm(r[0])),'Duplicate question '+id);prompts.add(norm(r[0]));
 assert.ok(['easy','medium','hard','obscure'].includes(r[7]||['easy','medium','hard','obscure'][ctx.window.TRIVIA_LEVELS[id-1]]));
 if(r[8]?.length){assert.equal(new Set(r[8].map(norm)).size,r[8].length);assert.equal(r[8].filter(a=>a===r[1]).length,1);}
}
const batch=all.filter(c=>c.id>=review.firstQuestion&&c.id<=review.lastQuestion),levels={},categories={};
assert.equal(batch.length,review.count);assert.equal(review.lastQuestion-review.firstQuestion+1,review.count);
for(const {r,cat} of batch){assert.equal(r[8].length,4);assert.ok(r[2]);levels[r[7]]=(levels[r[7]]||0)+1;categories[cat]=(categories[cat]||0)+1;}
assert.deepEqual(levels,review.difficultyCounts);assert.deepEqual(categories,review.categoryCounts);
assert.equal(new Set(batch.map(c=>c.r[4])).size,review.sourceCount);
console.log('Verified '+all.length.toLocaleString('en-US')+' numbered questions; reviewed batch '+review.firstQuestion+'–'+review.lastQuestion+', sources, options, difficulty and ceiling.');

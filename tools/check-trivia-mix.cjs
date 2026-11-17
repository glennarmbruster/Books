// Run with Node after editing the trivia bank or its percentage allocator.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const book = path.join(__dirname, '..', 'weird-facts-trivia');
const context = vm.createContext({window:{TRIVIA_CATEGORIES:[]}, assert});
const reader = fs.readFileSync(path.join(book, 'index.html'), 'utf8');
for (const [,file] of reader.matchAll(/src="(data\/[^"]+\.js|mix\.js)"/g)) {
  vm.runInContext(fs.readFileSync(path.join(book, file), 'utf8'), context, {filename:file});
}
vm.runInContext(`
  assert.deepEqual(portionCounts(readMix(['60','a','a','a']),30), [18,4,4,4]);
  assert.deepEqual(portionCounts(readMix(['50','12.5','12.5','25']),8), [4,1,1,2]);
  assert.throws(()=>readMix(['60','50','a','a']));
  assert.throws(()=>readMix(['10','20','30','0']));
  const groups=Array.from({length:16},()=>[]);
  // The shared easy/medium answer must be left for medium. A simple greedy
  // deal could otherwise report a shortage despite two legal distinct answers.
  groups[3].push('shared');groups[1].push('only easy');
  const allocation=assignAnswerGroups(groups,[1,1,0,0]);
  assert.equal(allocation[3][1],1);
  assert.equal(allocation[1][0],1);
  assert.throws(()=>assignAnswerGroups(groups,[0,2,0,0]));
  const edition=window.TRIVIA_CATEGORIES.flatMap(batch=>batch.cards.map((row,i)=>({id:batch.start+i,row})))
    .filter(card=>card.id>10000&&card.id<=20000).sort((a,b)=>a.id-b.id);
  const bands=difficulties.map(()=>0), letters=new Map(), prompts=new Set();
  for(const [i,{id,row}] of edition.entries()){
    const [q,a,,,url,,,level,options]=row;
    assert.equal(id,10001+i);assert.ok(q&&a&&url.startsWith('https://'));
    const band=difficulties.indexOf(level);assert.ok(band>=0);bands[band]++;
    assert.ok(!prompts.has(q));prompts.add(q);
    if(options?.length){assert.equal(new Set(options).size,options.length);assert.ok(options.includes(a));}
    const key=a.trim().normalize('NFKD').replace(/[\\u0300-\\u036f]/g,'').toLowerCase();
    const bucket=key[0]+':'+level;
    if(!letters.has(bucket))letters.set(bucket,new Set());
    letters.get(bucket).add(key.replace(/[^a-z0-9]+/g,' ').trim());
  }
  assert.deepEqual(bands,[7000,2000,650,350]);
  for(const letter of 'abcdefghijklmnopqrstuvwxyz'){
    assert.ok(letters.get(letter+':easy')?.size>=70,letter+' easy');
    assert.ok(letters.get(letter+':medium')?.size>=25,letter+' medium');
  }
`, context);
console.log('Verified the 20,000-question edition, A–Z minimums, and difficulty allocation.');

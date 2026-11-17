// Keep the complete spelling index off the reading screen’s main thread.
'use strict';
let words, keys, order, meta, editorial, frequency, lengthOrder, lengthStarts;
const chunks = new Map(), thesaurusChunks = new Map();
let thesaurusIndex, thesaurusOrder;
const british = new Map(), american = new Map();
let ready;

function fold(text) {
  return text.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '')
    .replace(/[’‘]/g, "'").replace(/[‐‑–]/g, '-').replace(/\s+/g, ' ').trim();
}

async function readFile(name) {
  const response = await fetch('./data/' + name);
  if (!response.ok) throw Error('A dictionary file could not be loaded.');
  if (!name.endsWith('.gz')) return response.json();
  const bytes = await response.arrayBuffer();
  const magic = new Uint8Array(bytes, 0, Math.min(bytes.byteLength, 2));
  if (magic[0] !== 31 || magic[1] !== 139) return new TextDecoder().decode(bytes);
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).text();
}

async function initialize() {
  const [info, list, ranks, edits] = await Promise.all([
    readFile('meta.json'), readFile('words.txt.gz'), readFile('common.txt.gz'), readFile('editorial.json')
  ]);
  meta = info; editorial = edits;
  words = list.trimEnd().split('\n');
  if (words.length !== meta.count) throw Error('The word index is incomplete.');
  keys = words.map(fold);
  order = new Uint32Array(words.length);
  const counts = new Uint32Array(66);
  let sorted = true;
  for (let i = 0; i < words.length; i++) {
    order[i] = i; counts[Math.min(65, keys[i].length)]++;
    if (i && keys[i - 1] > keys[i]) sorted = false;
  }
  if (!sorted) order.sort((a,b) => keys[a] < keys[b] ? -1 : keys[a] > keys[b] ? 1 : a-b);
  lengthStarts = new Uint32Array(counts.length + 1);
  for (let i = 0; i < counts.length; i++) lengthStarts[i+1] = lengthStarts[i] + counts[i];
  const cursor = lengthStarts.slice();
  lengthOrder = new Uint32Array(words.length);
  for (let i = 0; i < words.length; i++) lengthOrder[cursor[Math.min(65,keys[i].length)]++] = i;
  frequency = new Map(ranks.trim().split('\n').map((word,i) => [word,i]));
  for (const pair of edits.variants) {
    for (const [map,word] of [[british,pair.uk],[american,pair.us]]) {
      const key = word.toLowerCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(pair);
    }
  }
  return {count:meta.count,bytes:meta.downloadBytes};
}

function bound(needle, index=order) {
  let lo=0, hi=index.length;
  while (lo<hi) {
    const mid=(lo+hi)>>>1;
    if (keys[index[mid]]<needle) lo=mid+1; else hi=mid;
  }
  return lo;
}

function exactId(word) {
  const key=fold(word); let best=-1;
  for (let n=bound(key); n<order.length && keys[order[n]]===key; n++) {
    const id=order[n];
    if (words[id]===word) return id;
    if (best<0 || words[id].toLowerCase()===word.toLowerCase()) best=id;
  }
  return best;
}

function item(id) { return {id,word:words[id]}; }

function commonRank(key) { return frequency.get(key) ?? 10000000; }

function prefixes(key, exact, index) {
  const start=bound(key,index), end=bound(key+'\uffff',index);
  // Common completions and the earliest alphabetic matches are both useful.
  const best=[];
  for(let i=start;i<end;i++) {
    const id=index[i], w=keys[id];
    if(id===exact || !w.startsWith(key)) continue;
    const rank = Math.log2(2+commonRank(w)) + Math.min(12,w.length-key.length)*0.28 + (words[id]===w?0:0.4);
    if(best.length===8 && rank>=best[7].rank) continue;
    best.push({id,rank});best.sort((a,b)=>a.rank-b.rank||a.id-b.id);if(best.length>8)best.pop();
  }
  return best.map(x=>item(x.id));
}

// Banded optimal string alignment includes adjacent swaps (e.g. "teh").
function distance(a,b,limit,rows) {
  if(Math.abs(a.length-b.length)>limit)return limit+1;
  let [older,prev,cur]=rows;
  for(let j=0;j<=a.length;j++)prev[j]=j;
  for(let i=1;i<=b.length;i++){
    const lo=Math.max(1,i-limit),hi=Math.min(a.length,i+limit);cur[0]=i;
    if(lo>1)cur[lo-1]=limit+1;
    let minimum=limit+1;
    for(let j=lo;j<=hi;j++){
      let d=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(b.charCodeAt(i-1)!==a.charCodeAt(j-1)));
      if(i>1 && j>1 && b.charCodeAt(i-1)===a.charCodeAt(j-2) && b.charCodeAt(i-2)===a.charCodeAt(j-1))
        d=Math.min(d,older[j-2]+1);
      cur[j]=d; minimum=Math.min(minimum,d);
    }
    if(hi<a.length)cur[hi+1]=limit+1;
    if(minimum>limit)return limit+1;
    const swap=older;older=prev;prev=cur;cur=swap;
  }
  return prev[a.length];
}

function spellings(key, exact, inThesaurus) {
  const limit = key.length<=4 ? 1 : key.length<=8 ? 2 : 3;
  if(key.length<2 || key.length+limit>64)return [];
  const rows=Array.from({length:3},()=>new Uint16Array(key.length+2)), best=[];
  const chunksCount=Math.min(key.length,2*limit+1);
  const parts=Array.from({length:chunksCount},(_,i)=>key.slice(Math.floor(i*key.length/chunksCount),Math.floor((i+1)*key.length/chunksCount)));
  const start=lengthStarts[Math.max(0,key.length-limit)],end=lengthStarts[key.length+limit+1];
  for(let i=start;i<end;i++){
    const id=lengthOrder[i], candidate=keys[id];
    if(id===exact || candidate===key || (inThesaurus && !hasThesaurus(id)))continue;
    if(!parts.some(piece=>candidate.includes(piece)))continue;
    const d=distance(key,candidate,limit,rows);if(d>limit)continue;
    const freq=commonRank(candidate);
    const score=d*8 + Math.log2(freq+2)*0.42 + (words[id]===candidate?0:0.8);
    if(best.length===7 && score>=best[6].score)continue;
    const duplicate=best.findIndex(x=>keys[x.id]===candidate);
    if(duplicate>=0){
      if(best[duplicate].score<=score)continue;
      best.splice(duplicate,1);
    }
    best.push({id,score});best.sort((a,b)=>a.score-b.score||a.id-b.id);if(best.length>7)best.pop();
  }
  return best.map(x=>item(x.id));
}

function search(query,submitted,inThesaurus) {
  const key=fold(query);
  if(!key)return {exact:null,prefix:[],similar:[]};
  const id=exactId(query), prefix=prefixes(key,id,inThesaurus ? thesaurusOrder : order);
  let similar = id<0 && (submitted || (!prefix.length && key.length>=3))?spellings(key,id,inThesaurus):[];
  const corrected=Object.hasOwn(editorial.misspellings,key)?editorial.misspellings[key]:null, cid=corrected?exactId(corrected):-1;
  if(cid>=0 && cid!==id)similar=[item(cid),...similar.filter(x=>x.id!==cid)].slice(0,7);
  return {exact:id>=0?item(id):null,prefix,similar,correction:cid>=0&&cid!==id?item(cid):null};
}

function hasThesaurus(id) {
  return id>=0 && (thesaurusIndex.bits.charCodeAt(id>>3) & (1<<(id%8)))!==0;
}

let openingThesaurus;
async function openThesaurus() {
  if(!openingThesaurus){
    openingThesaurus=readFile('thesaurus/index.json.gz').then(text=>{
      const data=JSON.parse(text);
      if(data.size!==words.length)throw Error('Word list and thesaurus editions differ.');
      thesaurusIndex={...data,bits:atob(data.bits)};
      thesaurusOrder=order.filter(hasThesaurus);
      if(thesaurusOrder.length!==data.count)throw Error('The thesaurus index is incomplete.');
    }).catch(err=>{openingThesaurus=null;throw err;});
  }
  return openingThesaurus;
}

async function thesaurusEntry(id) {
  const word=words[id];
  if(!hasThesaurus(id)){
    const definition=await entry(id);
    const alternatives=[...definition.british.map(p=>p.us),...definition.american.map(p=>p.uk),
      ...definition.senses.map(sense=>sense[3]).filter(Boolean)];
    const references=[...new Set(alternatives)].filter(other=>other!==word && hasThesaurus(exactId(other)));
    return {word,groups:[],references};
  }
  const part=id%thesaurusIndex.shards, file=part.toString(16).padStart(2,'0');
  if(!thesaurusChunks.has(part)){
    const reading=readFile('thesaurus/'+file+'.json.gz').then(JSON.parse);
    thesaurusChunks.set(part,reading);
    if(thesaurusChunks.size>3)thesaurusChunks.delete(thesaurusChunks.keys().next().value);
    reading.catch(()=>{if(thesaurusChunks.get(part)===reading)thesaurusChunks.delete(part);});
  }
  const groups=(await thesaurusChunks.get(part))[id];
  if(!groups)throw Error('This thesaurus file is incomplete.');
  return {word,groups,references:[]};
}

async function entry(id) {
  if(!Number.isInteger(id)||id<0||id>=words.length)throw Error('Unknown word.');
  const part=Math.floor(id/meta.chunkSize);
  if(!chunks.has(part)) {
    const pending=readFile(meta.chunks[part]).then(JSON.parse);
    chunks.set(part,pending);
    if(chunks.size>5)chunks.delete(chunks.keys().next().value);
    pending.catch(()=>{if(chunks.get(part)===pending)chunks.delete(part);});
  }
  const list=await chunks.get(part),senses=list[id%meta.chunkSize];
  if(!Array.isArray(senses)||!senses.length)throw Error('This entry is incomplete.');
  const key=words[id].toLowerCase();
  return {...item(id),senses,wiktionary:id<meta.primaryCount,british:british.get(key)||[],american:american.get(key)||[]};
}

self.onmessage=async ({data})=>{
  const {seq,action}=data;
  try {
    if(!ready) ready=initialize().catch(err=>{ready=null;throw err;});
    const info=await ready;let result;
    if(data.thesaurus)await openThesaurus();
    if(action==='init')result=data.thesaurus?{count:thesaurusIndex.count}:info;
    if(action==='search')result=search(data.query,data.submitted,data.thesaurus);
    const ordered=data.thesaurus?thesaurusOrder:order;
    if(action==='wordAt')result=words[ordered[data.number-1]];
    if(action==='entry'){
      const id=exactId(data.word);
      result=id<0?null:data.thesaurus?await thesaurusEntry(id):await entry(id);
      if(result){
        let pos=bound(keys[id],ordered);
        while(pos<ordered.length && keys[ordered[pos]]===keys[id] && ordered[pos]!==id)pos++;
        if(ordered[pos]===id)result.page=pos+1;
      }
    }
    if(action==='browse'){
      const index=data.thesaurus?thesaurusOrder:order;
      const letter=fold(data.letter),start=bound(letter,index),end=bound(letter+'\uffff',index);
      const offset=Math.max(0,Math.min(data.offset||0,Math.max(0,end-start-1)));
      result={total:end-start,offset,items:Array.from(index.slice(start+offset,Math.min(start+offset+32,end)),item)};
    }
    self.postMessage({seq,result});
  } catch(err) {self.postMessage({seq,error:err.message});}
};

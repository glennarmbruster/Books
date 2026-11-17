'use strict';
const difficulties=['easy','medium','hard','obscure'];
function readMix(parts) {
  if(parts.length!==4 || parts.some(p=>p!=='a'&&(!/^\d{1,3}(?:\.\d{1,2})?$/.test(p)||Number(p)>100)))throw Error('Enter percentages from 0 to 100, with up to two decimal places.');
  const auto=parts.filter(p=>p==='a').length;
  const fixed=parts.reduce((sum,p)=>sum+(p==='a'?0:Math.round(Number(p)*100)),0);
  if(fixed>10000||(!auto&&fixed!==10000))throw Error(auto?'The percentages add up to more than 100%.':'The four percentages must add up to 100%.');
  return parts.map(p=>p==='a'?(10000-fixed)/auto/100:Number(p));
}
function portionCounts(percent,size) {
  const raw=percent.map(p=>p*size/100), counts=raw.map(n=>Math.floor(n+1e-9));
  const order=[0,1,2,3].sort((a,b)=>(raw[b]-counts[b])-(raw[a]-counts[a])||a-b);
  const remainder=size-counts.reduce((sum,n)=>sum+n,0);
  for(let i=0;i<remainder;i++)counts[order[i]]++;
  return counts;
}
// A letter answer can have cards at several levels. Allocate each answer only
// once, reserving enough flexible answers for the levels that need them.
function assignAnswerGroups(groups,counts) {
  const end=20, capacity=Array.from({length:end+1},()=>Array(end+1).fill(0));
  for(let mask=1;mask<16;mask++){
    capacity[0][mask]=groups[mask].length;
    for(let lev=0;lev<4;lev++)if(mask&(1<<lev))capacity[mask][16+lev]=groups[mask].length;
  }
  for(let lev=0;lev<4;lev++)capacity[16+lev][end]=counts[lev];
  let filled=0,needed=counts.reduce((sum,n)=>sum+n,0);
  while(filled<needed){
    const via=Array(end+1).fill(-1),queue=[0];via[0]=0;
    for(let k=0;k<queue.length&&via[end]===-1;k++){
      const node=queue[k];
      for(let to=1;to<=end;to++)if(via[to]===-1&&capacity[node][to]>0){via[to]=node;queue.push(to);}
    }
    if(via[end]===-1)throw Error('This mix needs more different answers than this letter and category can supply. Shorten the round or change its percentages.');
    let amount=needed-filled;
    for(let to=end;to;to=via[to])amount=Math.min(amount,capacity[via[to]][to]);
    for(let to=end;to;to=via[to]){capacity[via[to]][to]-=amount;capacity[to][via[to]]+=amount;}
    filled+=amount;
  }
  return groups.map((_,mask)=>difficulties.map((__,l)=>capacity[16+l][mask]));
}
function mixedHand(p,pool,random) {
  const counts=portionCounts(readMix(p.mix),p.size), available=difficulties.map(()=>[]);
  const shuffledPool=shuffled(pool,random);
  function rotated(list,stride){
    if(!list.length)return list;
    const start=((p.hand-1)*stride)%list.length;
    return list.slice(start).concat(list.slice(0,start));
  }
  if(p.letter){
    const byAnswer=new Map();
    for(const c of shuffledPool){
      let variants=byAnswer.get(c.answerKey);
      if(!variants){variants=[];byAnswer.set(c.answerKey,variants);}
      const level=difficulties.indexOf(c.level);
      if(!variants[level])variants[level]=c;
    }
    const groups=Array.from({length:16},()=>[]);
    for(const variants of byAnswer.values())groups[variants.reduce((mask,c,l)=>mask|(1<<l),0)].push(variants);
    const allocation=assignAnswerGroups(groups,counts);
    for(let mask=1;mask<16;mask++){
      const group=rotated(groups[mask],allocation[mask].reduce((sum,n)=>sum+n,0));let start=0;
      for(let l=0;l<4;l++){
        const end=start+allocation[mask][l];
        for(let k=start;k<end;k++)available[l].push(group[k][l]);
        start=end;
      }
    }
  }else{
    for(const c of shuffledPool)available[difficulties.indexOf(c.level)].push(c);
    for(let l=0;l<4;l++){
      if(counts[l]>available[l].length)throw Error('This round needs '+counts[l]+' '+difficulties[l]+' questions. Only '+available[l].length+' are available. Shorten the round or change its mix.');
      available[l]=rotated(available[l],counts[l]).slice(0,counts[l]);
    }
  }
  return shuffled(available.flat(),random);
}

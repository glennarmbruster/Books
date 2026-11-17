'use strict';
const $=id=>document.getElementById(id);
function element(tag,text,cls){const e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;return e;}
function playerCounts(value){
  if(value.includes('–')){const [lo,hi]=value.split('–').map(Number);return Array.from({length:hi-lo+1},(_,i)=>lo+i);}
  return value.split(',').map(Number);
}
function parseGame(record){
  const [heading,summary,...lines]=record.trim().split('\n');
  const [name,players,time,style,mode,target,decks='1']=heading.split(' | ');
  const id=name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,'');
  const g={id,name,players,counts:playerCounts(players),time,maxMinutes:Number(time.match(/(\d+) min$/)[1]),style,mode,target:Number(target),decks:Number(decks),summary,sections:[]};
  for(const ln of lines){if(ln.startsWith('## '))g.sections.push({heading:ln.slice(3),paragraphs:[]});else if(ln.startsWith('@ '))g.source=ln.slice(2);else if(ln.trim())g.sections.at(-1).paragraphs.push(ln);}
  return g;
}
let games=[],current;
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function matches() {
  const query=norm($('query').value.trim()), players=Number($('players').value);
  const decks=Number($('decks').value), time=Number($('time').value), style=$('style').value;
  return games.filter(g=>(!players || g.counts.includes(players)) && (!decks || g.decks<=decks)
    && (!time || g.maxMinutes<=time) && (!style || g.style===style) && norm(g.name+' '+g.style).includes(query));
}
function filters(){
  const options=matches();$('random').disabled=!options.length;$('list').replaceChildren();
  $('count').textContent=options.length===0?'No matches. Try a different player count, style, or name.':options.length+' of '+games.length+' games';
  for(const g of options){const a=element('a',null,'entry');a.href='#'+g.id;a.append(element('small',g.style),element('strong',g.name),element('span',g.players+(g.players==='1'?' player':' players')+' · '+g.time));$('list').append(a);}
}
function random(){
  const pool=matches(),others=pool.filter(g=>g.id!==current?.id),choices=others.length?others:pool;
  if(choices.length)location.hash=choices[Math.floor(Math.random()*choices.length)].id;
}
function scoreLink(g){
  const n=Number($('players').value)||g.counts.find(count=>count>1)||1;
  const teams=g.mode==='partner-teams' ? n/2 : (g.mode==='pairs'||(g.mode==='teams-if-four'&&n===4) ? 2 : 0);
  const link=$('score');link.hidden=g.mode==='none'||n===1;
  link.href='../score-book/index.html#'+new URLSearchParams({newGame:g.name,players:teams||n,target:g.target,order:g.mode==='low'?'low':'high',teams:teams?'yes':'no'});
}
function route(){
  const id=location.hash.slice(1);
  current=games.find(g=>g.id===id);$('catalog').hidden=!!current;$('reader').hidden=!current;
  if(!current){filters();return;}
  document.querySelector('book-pager').setPage(games.indexOf(current)+1,games.length,'game',n=>location.hash=games[n-1].id,()=>location.hash='');
  const g=current;$('title').textContent=g.name;$('details').textContent=[g.style,g.players+(g.players==='1'?' player':' players'),g.decks+(g.decks===1?' deck':' decks'),g.time].join(' · ');$('intro').textContent=g.summary;
  scoreLink(g);$('again').disabled=!matches().some(other=>other.id!==g.id);const host=$('sections');host.replaceChildren();
  for(const section of g.sections){
    const part=element('section',null,'rule');part.append(element('h2',section.heading));for(const para of section.paragraphs)part.append(element('p',para));host.append(part);
  }
  if(g.id==='bridge')bridgeLesson(host);
  if(g.source){const a=element('a','Further reading · '+new URL(g.source).hostname.replace(/^www\./,''),'back');a.href=g.source;host.append(a);}
  $('title').focus({preventScroll:true});window.scrollTo(0,0);
}
async function init(){
  const res=await fetch('rules.txt');if(!res.ok)throw Error('Missing rules');
  games=(await res.text()).split(/^# /m).filter(s=>s.trim()).map(parseGame).sort((a,b)=>a.name.localeCompare(b.name));
  for(const n of [...new Set(games.flatMap(g=>g.counts))].sort((a,b)=>a-b))$('players').add(new Option(n+'',n));
  for(const type of [...new Set(games.map(g=>g.style))].sort())$('style').add(new Option(type,type));
  for(const id of ['query','style','decks','players','time'])$(id).addEventListener('input',filters);
  $('random').onclick=random;$('again').onclick=random;window.addEventListener('hashchange',route);route();
}
init().catch(()=>{$('count').textContent='The rules could not open. Reopen the book online to finish its download.';});

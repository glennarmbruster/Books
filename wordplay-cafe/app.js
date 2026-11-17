'use strict';
const $ = id => document.getElementById(id);
const types = {cipher:'Cryptogram', ladder:'Word ladder', hunt:'Word hunt'};
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const key = id => 'wordplay-cafe/v1/' + id;
let puzzle, state;
function el(tag, text, cls) {
  const item = document.createElement(tag);
  if (text != null) item.textContent = text;
  if (cls) item.className = cls;
  return item;
}
function link(text, href, cls) { const a=el('a',text,cls); a.href=href; return a; }
function button(text, fn) { const b=el('button',text); b.type='button'; b.onclick=fn; return b; }
function load(id) {
  try { return JSON.parse(localStorage.getItem(key(id))) || {}; } catch { return {}; }
}
function save() {
  try { localStorage.setItem(key(puzzle.id),JSON.stringify(state)); }
  catch { $('feedback').textContent='This device could not save your progress.'; }
}
function selectedMenu() {
  const type = $('kind').value;
  return type ? menu.filter(p => p.type === type) : menu;
}
function renderMenu() {
  const visible = selectedMenu();
  const last = Number(localStorage.getItem(key('last')));
  const recent = visible.find(p => p.id === last);
  const next = recent && !load(last).done ? recent : visible.find(p => !load(p.id).done);
  const choice = next || recent || visible[0];
  $('resume').href = '#' + choice.id;
  $('resume').textContent = !next ? 'Revisit · ' + choice.title :
    recent ? 'Continue · ' + choice.title : 'Start puzzle ' + choice.id;
  const savedStates = visible.map(p => load(p.id));
  const solved = savedStates.filter(s => s.done).length;
  const started = savedStates.filter(s => !s.done && Object.keys(s).length).length;
  $('progress').textContent = solved + ' of ' + visible.length + ' solved' +
    (started ? ' · ' + started + ' in progress' : '');
  $('list').replaceChildren();
  for(const p of visible) {
    const saved=load(p.id), a=link('', '#'+p.id,'entry');
    if (saved.done) a.classList.add('solved');
    a.append(el('small',String(p.id).padStart(2,'0')+' · '+types[p.type]),el('strong',p.title),
      el('span',saved.done?'✓ Solved':Object.keys(saved).length?'In progress':'Play →'));
    $('list').append(a);
  }
}
function complete(words) {
  state.done=true;save();
  $('feedback').textContent='✓ Solved';
  const nav=$('after');nav.replaceChildren();
  const links=el('div',null,'wordlinks');links.append(el('strong','Look up a word'));
  for(const w of new Set(words)) links.append(link(w.toLowerCase(),'../desk-dictionary/index.html#q='+encodeURIComponent(w.toLowerCase())));
  nav.append(links);
  const visible=selectedMenu();
  const next=visible.find(p=>p.id>puzzle.id&&!load(p.id).done)||visible.find(p=>!load(p.id).done);
  nav.append(link(next?'Next puzzle · '+next.title:'Return to menu',next?'#'+next.id:'#','action'),
    button('Play again',()=>{localStorage.removeItem(key(puzzle.id));route();}));
}
function cipher() {
  $('instructions').textContent='Each printed letter stands for a different letter. Tap a box and type your guess. Every copy of that symbol fills in together.';
  const mapping=state.guesses ||= {};
  // A seeded alphabet shuffle gives each puzzle its own stable substitution.
  let seed=puzzle.id*109; const letters=[...alphabet];
  for(let i=25;i>0;i--){ seed=(seed*16807)%2147483647;const j=seed%i;[letters[i],letters[j]]=[letters[j],letters[i]]; }
  const cells=[], board=el('div',null,'cipher-board');
  function refresh() {
    for(const {symbol,field} of cells) field.value=mapping[symbol]||'';
  }
  for(const word of puzzle.phrase.split(' ')){
    const group=el('span',null,'cipher-word');
    for(const plain of word){
      const symbol=letters[alphabet.indexOf(plain)], label=el('label',symbol);
      const field=el('input');field.setAttribute('aria-label','Guess for '+symbol);field.autocomplete='off';field.spellcheck=false;field.autocapitalize='characters';
      field.onfocus=()=>{field.select();};
      field.oninput=()=>{
        const value=field.value.toUpperCase().replace(/[^A-Z]/g,'').slice(-1);
        if(value && Object.keys(mapping).some(other=>other!==symbol&&mapping[other]===value)){
          $('feedback').textContent=value+' is in use. Clear its other box to move it.';refresh();field.select();return;
        }
        mapping[symbol]=value;refresh();save();$('feedback').textContent='';field.select();
        if(cells.every(c=>mapping[c.symbol]===c.plain)){ complete(puzzle.phrase.split(' ')); for(const c of cells)c.field.readOnly=true; }
      };
      cells.push({symbol,plain,field});label.append(field);group.append(label);
    }
    board.append(group);
  }
  $('board').append(board);refresh();
  if(state.done){ for(const c of cells)c.field.readOnly=true;complete(puzzle.phrase.split(' '));return; }
  $('board').append(button('Hint',()=>{$('feedback').textContent=puzzle.hint;}),
    button('Check letters',()=>{const attempted=cells.filter(c=>mapping[c.symbol]);const wrong=[...new Set(attempted.filter(c=>mapping[c.symbol]!==c.plain).map(c=>c.symbol))];
      $('feedback').textContent=!attempted.length?'Enter a guess first.':wrong.length?'Recheck these symbols: '+wrong.join(', '):'Every letter entered so far is correct.';}));
}
function ladder() {
  const path=puzzle.path, answers=state.rungs ||= {};
  $('instructions').textContent='Change one letter at a time, keeping the other letters in place. Each clue describes the next word.';
  const list=el('ol',null,'ladder');list.append(el('li',path[0],'endpoint'));
  const fields=[];
  puzzle.clues.forEach((clue,i)=>{
    const li=el('li'),label=el('label',clue),input=el('input');
    input.maxLength=path[0].length;input.autocomplete='off';input.spellcheck=false;input.value=answers[i]||'';input.readOnly=!!state.done;
    input.oninput=()=>{input.value=input.value.toUpperCase().replace(/[^A-Z]/g,'');answers[i]=input.value;save();$('feedback').textContent='';};
    label.append(input);li.append(label);list.append(li);fields.push(input);
  });
  list.append(el('li',path.at(-1),'endpoint'));$('board').append(list);
  if(state.done){complete(path);return;}
  const check=button('Check ladder',()=>{
    const i=fields.findIndex((f,i)=>f.value!==path[i+1]);
    if(i!==-1){$('feedback').textContent='Check rung '+(i+1)+' after '+path[i]+'.';fields[i].focus();return;}
    fields.forEach(f=>f.readOnly=true);check.hidden=true;complete(path);
  });
  $('board').append(check);
}
function hunt() {
  $('instructions').textContent='Find the five clued words. Use each letter at most once per answer. Tap the tiles or type a word.';
  const found=state.found ||= [], keys=Object.keys(puzzle.targets);
  const form=el('form'),tiles=el('div',null,'tiles'),label=el('label','Your word'),input=el('input');
  input.autocomplete='off';input.maxLength=7;input.spellcheck=false;input.value=state.draft||'';
  const update=()=>{input.value=input.value.toUpperCase().replace(/[^A-Z]/g,'');state.draft=input.value;save();};
  input.oninput=update;
  const order=[...puzzle.letters].sort();for(const c of order)tiles.append(button(c,()=>{if(!input.value.includes(c)){input.value+=c;update();}}));
  const submit=el('button','Submit word');submit.type='submit';label.append(input);form.append(tiles,label,submit,button('Clear',()=>{input.value='';update();input.focus();}));
  const clues=el('ol',null,'clues');$('board').append(form,clues);
  function refresh(){clues.replaceChildren(...keys.map(k=>el('li',puzzle.targets[k]+(found.includes(k)?' · '+k:' ('+k.length+')'),found.includes(k)?'answered':'')));}
  form.onsubmit=e=>{
    e.preventDefault();const word=input.value.toUpperCase().trim();
    if(!keys.includes(word)||found.includes(word)){$('feedback').textContent=found.includes(word)?'You already found that word.':'Look for a word that answers one of the clues.';input.select();return;}
    found.push(word);input.value='';update();refresh();$('feedback').textContent=word+' · '+found.length+' of 5 found';
    if(found.length===keys.length){form.hidden=true;complete(keys);}else input.focus();
  };refresh();if(state.done){form.hidden=true;complete(keys);}
}
function route(){
  puzzle=menu.find(p=>'#'+p.id===location.hash);$('play').hidden=!puzzle;$('catalog').hidden=!!puzzle;
  if(!puzzle){renderMenu();return;}
  localStorage.setItem(key('last'),String(puzzle.id));state=load(puzzle.id);
  $('number').textContent=types[puzzle.type]+' · '+puzzle.id+' / '+menu.length;$('title').textContent=puzzle.title;
  $('board').replaceChildren();$('after').replaceChildren();$('feedback').textContent='';
  ({cipher,ladder,hunt})[puzzle.type]();$('title').focus({preventScroll:true});window.scrollTo(0,0);
}
$('kind').onchange=renderMenu;window.addEventListener('hashchange',route);route();

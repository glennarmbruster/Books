'use strict';
const puzzles=window.SUDOKU_PUZZLES, $=id=>document.getElementById(id);
const storage='books.sudoku.v1', pinKey=storage+'.pin';
const blank=()=>({values:'0'.repeat(81),notes:Array(81).fill(0)});
const book=()=>JSON.parse(localStorage.getItem(storage)||'{}');
const puzzlePage=()=>book()[number]||blank();
const label=n=>String(n).padStart(2,'0');
let number=0, selected=-1, pencil=false, checking=false, undoStack=[];
const levels=['Easy','Medium','Hard','Very hard'];
function element(tag,text,cls) {
  const item=document.createElement(tag);
  if(text!==undefined)item.textContent=text;
  if(cls)item.className=cls;
  return item;
}
function solved(p,page) {
  return !!page&&[...p.puzzle].every((digit,i)=>(digit==='0'?page.values[i]:digit)===p.solution[i]);
}
function write(data) {
  try {localStorage.setItem(storage,JSON.stringify(data));return true;}
  catch {$('message').textContent='Progress could not be saved on this device.';return false;}
}
function index() {
  const data=book();
  const finished=puzzles.filter((p,i)=>solved(p,data[i+1])).length;
  $('progress').textContent=finished+' of '+puzzles.length+' solved';
  const last=Number(localStorage.getItem(storage+'.last'));
  const resume=(puzzles[last-1]&&!solved(puzzles[last-1],data[last]))?last:
    Math.max(1,puzzles.findIndex((p,i)=>!solved(p,data[i+1]))+1);
  $('resume').href='#'+resume;
  $('resume').textContent=(data[resume]?'Continue puzzle ':'Start puzzle ')+label(resume);
  $('levels').replaceChildren();
  for(const level of levels) {
    const group=element('details'),summary=element('summary',level),links=element('div',undefined,'numbers');
    puzzles.forEach((p,i)=>{
      if(p.level!==level)return;
      const n=i+1,done=solved(p,data[n]),started=data[n]?.values.match(/[1-9]/)||data[n]?.notes.some(Boolean);
      const link=element('a',label(n),done?'done':started?'started':'');link.href='#'+n;
      link.setAttribute('aria-label','Puzzle '+n+', '+level+(done?', solved':started?', in progress':''));
      links.append(link);
    });
    summary.append(element('small',links.children.length+' puzzles'));group.append(summary,links);
    group.open=level===puzzles[resume-1].level;$('levels').append(group);
  }
}
const cells=[];
for(let i=0;i<81;i++) {
  const cell=element('button');cell.type='button';cell.onclick=()=>{selected=i;render();};
  cells.push(cell);$('grid').append(cell);
}
for(let d=1;d<=9;d++) {const b=element('button',String(d));b.type='button';b.onclick=()=>edit(d);$('digits').append(b);}
function render() {
  const p=puzzles[number-1],page=puzzlePage(),done=solved(p,page);
  const row=i=>Math.floor(i/9),col=i=>i%9,box=i=>Math.floor(row(i)/3)*3+Math.floor(col(i)/3);
  const value=i=>p.puzzle[i]!=='0'?p.puzzle[i]:page.values[i];
  let errors=0;
  cells.forEach((b,i)=>{
    const digit=value(i),fixed=p.puzzle[i]!=='0',active=i===selected;
    const wrong=checking&&digit!=='0'&&digit!==p.solution[i];
    if(wrong)errors++;
    b.className=[fixed?'fixed':'',active?'chosen':'',selected>=0&&(row(i)===row(selected)||col(i)===col(selected)||box(i)===box(selected))?'peer':'',
      selected>=0&&digit!=='0'&&value(selected)===digit?'same':'',wrong?'wrong':''].join(' ');
    b.tabIndex=i===(selected<0?0:selected)?0:-1;
    b.setAttribute('aria-pressed',String(active));
    let description='Row '+(row(i)+1)+', column '+(col(i)+1)+', ';
    if(digit!=='0'){b.textContent=digit;description+=(fixed?'given ':'')+digit;}
    else if(page.notes[i]) {
      const notes=element('span',undefined,'candidates'),digits=[];
      for(let d=1;d<=9;d++) {
        const present=page.notes[i]&(1<<(d-1));
        if(present) digits.push(d);
        notes.append(element('span',present?String(d):''));
      }
      b.replaceChildren(notes);description+='notes '+digits.join(', ');
    } else {b.replaceChildren();description+='blank';}
    b.setAttribute('aria-label',description+(wrong?', check this entry':''));
  });
  const editable=selected>=0&&p.puzzle[selected]==='0';
  $('selection').textContent=selected<0?'Select a square, then a number.':'Row '+(row(selected)+1)+' · Column '+(col(selected)+1)+(editable?'':' · Given');
  $('notes').setAttribute('aria-pressed',String(pencil));$('undo').disabled=!undoStack.length;
  for(const b of $('digits').children)b.disabled=!editable;
  $('erase').disabled=!editable;
  $('feedback').textContent=done?'✓ Puzzle solved.':checking?errors?errors+' '+(errors===1?'entry needs':'entries need')+' another look.':
    'All filled entries are correct so far.':'';
}
function edit(d) {
  if(!number||selected<0||puzzles[number-1].puzzle[selected]!=='0')return;
  const data=book(),page=data[number]||blank(),before=JSON.stringify(page);
  const value=String(pencil?'0':d);
  if(d&&pencil&&page.values[selected]!=='0')return;
  page.values=page.values.slice(0,selected)+value+page.values.slice(selected+1);
  page.notes[selected]=pencil&&d?(page.notes[selected]^(1<<(d-1))):0;
  if(before===JSON.stringify(page))return;
  data[number]=page;
  if(write(data)){undoStack.push(before);if(undoStack.length>100)undoStack.shift();checking=false;}
  render();
}
$('notes').onclick=()=>{pencil=!pencil;render();};
$('erase').onclick=()=>edit(0);
$('undo').onclick=()=>{if(!undoStack.length)return;const data=book();data[number]=JSON.parse(undoStack.at(-1));if(write(data))undoStack.pop();checking=false;render();};
$('check').onclick=()=>{checking=true;render();};
$('grid').onkeydown=e=>{
  if(e.altKey||e.ctrlKey||e.metaKey)return;
  const i=cells.indexOf(e.target);if(i<0)return;
  selected=i;
  const dirs={ArrowLeft:i%9?i-1:i,ArrowRight:i%9<8?i+1:i,ArrowUp:Math.max(i-9,i%9),ArrowDown:Math.min(i+9,72+i%9)};
  if(Object.hasOwn(dirs,e.key)){e.preventDefault();selected=dirs[e.key];render();cells[selected].focus();}
  else if(/^[1-9]$/.test(e.key)){e.preventDefault();edit(Number(e.key));}
  else if(['Backspace','Delete','0'].includes(e.key)){e.preventDefault();edit(0);}
};
function route() {
  number=Number(location.hash.slice(1));if(!Number.isInteger(number)||!puzzles[number-1])number=0;
  $('index').hidden=!!number;$('play').hidden=!number;undoStack=[];selected=-1;checking=pencil=false;
  if(number) {
    $('title').textContent='Puzzle '+label(number);$('level').textContent=puzzles[number-1].level;
    $('prev').href='#'+(number-1);$('prev').hidden=number===1;
    $('next').href='#'+(number+1);$('next').hidden=number===puzzles.length;
  document.querySelector('book-pager').setPage(number,puzzles.length,'puzzle',n=>location.hash=String(n),()=>location.hash='');
    try {localStorage.setItem(storage+'.last',number);}catch{}
    render();
  } else index();
  window.scrollTo(0,0);
}
document.addEventListener('open-book-number',e=>{location.hash=e.detail;});
window.onhashchange=route;
window.addEventListener('storage',e=>{if(e.key===storage){undoStack=[];if(number)render();else index();}});
let onPin=null,setup=false;
function authorize(title,reason,action,first=false) {
  setup=first;onPin=action;$('pin-form').reset();$('pin-error').textContent='';
  $('dialog-title').textContent=title;$('reason').textContent=reason;
  $('accept').textContent=first?'Set PIN':title;
  $('confirm-label').hidden=!first;$('confirm').required=first;$('cancel').hidden=first;
  $('dialog').showModal();$('pin').focus();
}
async function digest(value,salt) {
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+':'+value));
  return Array.from(new Uint8Array(bytes),v=>v.toString(16).padStart(2,'0')).join('');
}
$('pin-form').onsubmit=async e=>{
  e.preventDefault();if($('accept').disabled)return;
  $('accept').disabled=$('cancel').disabled=true;
  try {
    const value=$('pin').value;
    if(setup) {
      if(value!==$('confirm').value)throw Error('Enter the same PIN twice.');
      const salt=crypto.randomUUID(),hash=await digest(value,salt);
      if(!localStorage.getItem(pinKey))localStorage.setItem(pinKey,JSON.stringify({salt,hash}));
    } else {
      const pin=JSON.parse(localStorage.getItem(pinKey));
      if(!pin||pin.hash!==await digest(value,pin.salt))throw Error('That PIN did not match.');
    }
    onPin();$('dialog').close();
  } catch(e){$('pin-error').textContent=e.message;}
  finally{$('accept').disabled=$('cancel').disabled=false;}
};
$('dialog').oncancel=e=>{if(setup||$('accept').disabled)e.preventDefault();};
$('cancel').onclick=()=>$('dialog').close();
function replace(data){if(!write(data))throw Error('Could not save the change.');route();}
$('reset').onclick=()=>{const id=number;authorize('Clear puzzle '+label(id),'Erase the entries and pencil notes for this puzzle.',()=>{const data=book();delete data[id];replace(data);});};
$('clear-all').onclick=()=>authorize('Clear all puzzles','Erase entries and pencil notes for all 100 puzzles on this device.',()=>replace({}));
$('export').onclick=async()=>{
  const file=new File([JSON.stringify({format:'books-sudoku',version:1,pages:book()})],'Sudoku-progress.json',{type:'application/json'});
  if(navigator.canShare?.({files:[file]})) {
    try{await navigator.share({files:[file],title:'Sudoku progress'});return;}catch(e){if(e.name==='AbortError')return;}
  }
  const url=URL.createObjectURL(file),a=element('a');a.href=url;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
};
$('import').onchange=async e=>{
  try {
    const file=e.target.files[0];if(!file)return;
    if(file.size>250000)throw Error();
    const data=JSON.parse(await file.text()),pages=data.pages;
    if(data.format!=='books-sudoku'||data.version!==1||!pages||Array.isArray(pages)||typeof pages!=='object')throw Error();
    for(const [key,p] of Object.entries(pages)) {
      const original=puzzles[Number(key)-1];if(!original||key!==String(Number(key))||!p||typeof p.values!=='string'||!/^\d{81}$/.test(p.values)||!Array.isArray(p.notes)||p.notes.length!==81)throw Error();
      if(p.notes.some((v,i)=>!Number.isInteger(v)||v<0||v>511||((original.puzzle[i]!=='0'||p.values[i]!=='0')&&v)||(original.puzzle[i]!=='0'&&p.values[i]!=='0')))throw Error();
    }
    authorize('Restore progress','Replace Sudoku entries on this device with the selected backup.',()=>replace(pages));
  }catch{$('message').textContent='Choose a valid Sudoku progress backup.';}
  finally{e.target.value='';}
};
route();
if(!localStorage.getItem(pinKey))authorize('Choose your Sudoku PIN','Choose 4–8 digits to protect your progress when clearing puzzles or restoring a backup.',()=>{},true);

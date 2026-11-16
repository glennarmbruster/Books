'use strict';
const $ = s => document.querySelector(s);
const main = $('#main'), dlg = $('#dialog'), dialogbody = $('#dialogbody');
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const num = n => String(n).padStart(2,'0');
const key = 'prismcabinet.volume1.v1', pinKey = key+'.pin';
const defaults = () => ({pages:{},last:1,view:'shelf',id:1});
let book=defaults(), pin, startupError=false, pendingPin=false, timer;
try {
  const raw=localStorage.getItem(key);
  if(raw){const saved=JSON.parse(raw);validate(saved);book=saved;}
  pin=JSON.parse(localStorage.getItem(pinKey)||'null');
} catch {startupError=true;}
const pNow=()=>puzzles[book.id-1];
function page(){return book.pages[book.id] ||= {};}
function toast(message){$('#notice').textContent=message;clearTimeout(timer);timer=setTimeout(()=>$('#notice').textContent='',4500);}
function save(){try{localStorage.setItem(key,JSON.stringify(book));return true;}catch{toast('Storage is full or unavailable. Back up your work before closing.');return false;}}
function nav(view,id=book.id){
 for(const section of main.querySelectorAll('.index-section')){
  if(section.open)openSections.add(section.dataset.section);
  else openSections.delete(section.dataset.section);
 }
 if((view==='index'||view==='answers')&&(book.view==='puzzle'||book.view==='answer')){
  openSections.add(pNow().kind);
 }
 book.view=view;book.id=id;if(view==='puzzle')book.last=id;save();render();window.scrollTo(0,0);}
function btn(label,act,cls=''){return '<button type="button" class="'+cls+'" data-act="'+act+'">'+label+'</button>';}
function go(label,view,id,cls=''){return '<button class="'+cls+'" data-go="'+view+'" data-id="'+id+'">'+label+'</button>';}
function progress(id){const s=book.pages[id];if(s?.done)return 'Complete';if(s&&(s.notes||s.ink?.length||Object.values(s.fields||{}).some(Boolean)))return 'In progress';return 'Unopened';}
const sectionLabels = {
 'Visual reasoning': 'Visual reasoning',
 'Optical illusions': 'Optical illusions',
 'Lateral thinking': 'Lateral thinking',
 'Logic': 'Logic challenges'
};
const openSections = new Set();

function numberJump(answer) {
 return '<book-number-jump noun="' + (answer ? 'answer' : 'challenge') + '" max="' + puzzles.length + '"></book-number-jump>';
}
main.addEventListener('open-book-number', event => {
 const answers = book.view === 'answer' || book.view === 'answers';
 nav(answers ? 'answer' : 'puzzle', event.detail);
 const title = main.querySelector('h1');
 title.tabIndex = -1;
 title.focus({preventScroll:true});
});

function list(answer = false) {
 return numberJump(answer) + Object.entries(sectionLabels).map(([kind, label]) => {
  const cases = puzzles.filter(p => p.kind === kind);
  const complete = cases.filter(p => book.pages[p.id]?.done).length;
  const rows = cases.map(p => {
   const done = Boolean(book.pages[p.id]?.done);
   const status = progress(p.id);
   const action = answer ? (done ? 'Complete · Solution' : 'Solution') : (status === 'Unopened' ? 'Open' : status);
   const title = done ? '<s>' + esc(p.title) + '</s>' : esc(p.title);
   const row = '<span class="num">' + num(p.id) + '</span><span><strong>' + title +
    '</strong><small>' + p.level + '</small></span><span class="status">' + action + ' ›</span>';
   return go(row, answer ? 'answer' : 'puzzle', p.id, 'indexrow');
  }).join('');
  return '<details class="index-section" data-section="' + kind + '"' + (openSections.has(kind) ? ' open' : '') +
   '><summary><span>' + label + '</span><small>' + complete + ' of ' + cases.length +
   ' complete</small></summary>' + rows + '</details>';
 }).join('');
}
function notebook(s){
 return '<section class="field"><h2 class="cap">Scratch notebook</h2><label for="notes">Typed notes</label><textarea id="notes" placeholder="Work through your ideas…">'+esc(s.notes)+'</textarea><div class="toolsline"><span>Scratch paper · finger or Pencil</span><div>'+btn('Pen','pen','primary')+' '+btn('Eraser','eraser')+' '+btn('Undo stroke','undo')+'</div></div><svg xmlns="http://www.w3.org/2000/svg" class="inkpad" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-label="Handwriting area"></svg></section>';
}
let inkTool='pen',inkHistory=[];
function drawInk(){const svg=$('.inkpad');if(!svg)return;svg.replaceChildren();for(const stroke of page().ink||[])appendStroke(svg,stroke);}
function appendStroke(svg,stroke){const el=document.createElementNS('http://www.w3.org/2000/svg','polyline');el.setAttribute('fill','none');el.setAttribute('stroke','#234c52');el.setAttribute('stroke-width','2');el.setAttribute('vector-effect','non-scaling-stroke');el.setAttribute('stroke-linecap','round');el.setAttribute('stroke-linejoin','round');el.setAttribute('points',stroke.map(p=>p.join(',')).join(' '));svg.appendChild(el);return el;}
function setupInk(){
 const svg=$('.inkpad');inkTool='pen';inkHistory=[];drawInk();let pointer=null,stroke,node;
 const pos=e=>{const b=svg.getBoundingClientRect();return [Math.round(Math.max(0,Math.min(1,(e.clientX-b.left)/b.width))*1000),Math.round(Math.max(0,Math.min(1,(e.clientY-b.top)/b.height))*360)];};
 function erase(pt){const ink=page().ink||[];const i=ink.findIndex(st=>st.some((end,j)=>{const a=st[Math.max(0,j-1)],dx=end[0]-a[0],dy=end[1]-a[1],t=Math.min(1,Math.max(0,((pt[0]-a[0])*dx+(pt[1]-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(pt[0]-a[0]-t*dx,pt[1]-a[1]-t*dy)<13;}));if(i>=0){inkHistory.push({deleted:ink[i],i});ink.splice(i,1);drawInk();save();}}
 svg.onpointerdown=e=>{if(pointer!==null)return;e.preventDefault();pointer=e.pointerId;svg.setPointerCapture(pointer);const pt=pos(e);if(inkTool==='eraser'){erase(pt);return;}stroke=[pt,[Math.min(1000,pt[0]+.1),pt[1]]];node=appendStroke(svg,stroke);};
 svg.onpointermove=e=>{if(e.pointerId!==pointer)return;const pt=pos(e);if(inkTool==='eraser'){erase(pt);return;}if(stroke.length<5000){stroke.push(pt);node.setAttribute('points',stroke.map(p=>p.join(',')).join(' '));}};
 function finish(e){if(e.pointerId!==pointer)return;pointer=null;if(inkTool==='pen'&&stroke){(page().ink||=[]).push(stroke);inkHistory.push({added:true});save();stroke=null;}}
 svg.onpointerup=finish;svg.onpointercancel=finish;
}
function library() {
 const answers = book.view === 'answers';
 if (answers || book.view === 'index') {
  return `<div class="page"><div class="pager">${go('‹ Bookshelf','shelf',book.id)}</div>
    <div class="filehead"><p class="eyebrow">Volume I · ${answers ? 'Companion book' : 'Challenge book'}</p>
    <h1>${answers ? 'The Answer Book' : 'Challenge index'}</h1></div>${list(answers)}</div>`;
 }
 const started = puzzles.some(p => progress(p.id) !== 'Unopened') || book.last !== 1;
 const completed = puzzles.filter(p => book.pages[p.id]?.done).length;
 const cover = `<span class="bookinner"><span class="eyebrow">Challenge book · ${puzzles.length} challenges</span>
   <img src="./icon.png" alt=""><strong>The Prism<br>Cabinet</strong>
   <small>${started ? 'Resume challenge ' + num(book.last) : 'Open the first challenge'} &nbsp; →</small></span>`;
 const companion = '<span class="bookinner"><span class="eyebrow">Companion volume</span><strong>The Answer<br>Book</strong><small>Browse solutions &nbsp; →</small></span>';
 return `<p class="eyebrow">Volume I · Travel edition</p><h1>Your bookshelf</h1>
   <div class="shelf">${go(cover,'puzzle',book.last,'book')}${go(companion,'answers',book.id,'book answer')}</div>
   <div class="sectionhead"><h2>Challenge index</h2><span>${completed} of ${puzzles.length} complete</span></div>${list()}`;
}

function plate(file, description) {
 if (!file) return '';
 return `<figure class="plate"><img src="./figures/${esc(file)}" alt="${esc(description)}"></figure>`;
}

function evidence(p) {
 const tables = (p.tables || []).map(([caption, headings, rows]) =>
  `<section class="exhibit"><h2 class="cap">${esc(caption)}</h2><div class="scroll">
    <table><thead><tr>${headings.map(h => '<th scope="col">' + esc(h) + '</th>').join('')}</tr></thead>
    <tbody>${rows.map(row => '<tr>' + row.map(cell => '<td>' + esc(cell) + '</td>').join('') + '</tr>').join('')}</tbody></table>
   </div></section>`).join('');
 const clues = p.clues?.length ? '<ol>' + p.clues.map(clue => '<li>' + esc(clue) + '</li>').join('') + '</ol>' : '';
 return plate(p.figure, p.alt) + tables + clues;
}

function responseArea(p, state) {
 const fields = state.fields || {};
 const choices = p.choices?.length ? `<fieldset class="choices"><legend>${esc(p.questions[0])}</legend>${
  p.choices.map(option => `<label><input type="radio" name="choice" data-field="choice" value="${esc(option)}"
    ${fields.choice === option ? 'checked' : ''}>${esc(option)}</label>`).join('')}</fieldset>` : '';
 const questions = p.questions.map((question, i) => choices && i === 0 ? '' : `<label class="question" for="q${i}">${esc(question)}</label>
   <textarea id="q${i}" data-field="q${i}">${esc(fields['q' + i])}</textarea>`).join('');
 return '<section class="field"><h2 class="cap">Your answer</h2>' + choices + questions + '</section>';
}

function pageBody() {
 const p = pNow(), state = book.pages[p.id] || {};
 const answer = book.view === 'answer';
 const index = answer ? 'answers' : 'index';
 const prev = p.id > 1 ? go('← Previous', book.view, p.id - 1) : '';
 const next = p.id < puzzles.length ? go('Next →', book.view, p.id + 1) : '';
 let content;
 if (answer) {
  content = `<section class="solution"><h2 class="cap">Solution · ${num(p.id)}</h2>
    ${state.fields?.choice ? '<p class="subtle">Your choice · ' + esc(state.fields.choice) + '</p>' : ''}
    <strong>${esc(p.answer)}</strong><p>${esc(p.why)}</p></section>
    ${p.reveal ? '<button type="button" id="compare-plate">Show original diagram</button>' : ''}
    ${plate(p.reveal || p.figure, p.reveal ? p.revealAlt : p.alt)}
    ${go('‹ Return to challenge ' + num(p.id), 'puzzle', p.id, 'primary')}`;
 } else {
  const hints = p.hints.map((hint,i) => `<details><summary>Hint ${i+1}</summary><p>${esc(hint)}</p></details>`).join('');
  content = `<p class="intro">${esc(p.intro)}</p>${evidence(p)}${responseArea(p, state)}
    <div class="hints">${hints}</div>${notebook(state)}
    <div class="answerbar"><label class="complete-control"><input type="checkbox" id="puzzle-complete" ${state.done ? 'checked' : ''}> Complete</label>
    ${go('Challenge index','index',p.id)}${go('Open answer ' + num(p.id) + ' ↗','answer',p.id)}${btn('Clear this page','clearpage','danger')}</div>`;
 }
 return `<article class="page"><div class="pager">${go(answer ? '‹ Answer index' : '‹ Challenge index',index,p.id)}
   <div class="navright">${prev}${next}</div></div>${numberJump(answer)}<div class="filehead">
   <p class="eyebrow">${answer ? 'Answer' : 'Challenge'} ${num(p.id)} / ${num(puzzles.length)} &nbsp; · &nbsp; ${esc(p.kind)} &nbsp; · &nbsp; ${esc(p.level)}</p>
   <h1>${esc(p.title)}</h1></div>${content}</article>`;
}
function render(){
 if(startupError){main.innerHTML='<h1>Saved book needs attention</h1><p>Your stored progress could not be read. Keep this copy of the app open and retain your latest backup.</p>';return;}
 const inside=['puzzle','answer'].includes(book.view);main.innerHTML=inside?pageBody():library();
 const compare = $('#compare-plate');
 if (compare) {
  const puzzle = pNow();
  const picture = main.querySelector('.plate img');
  let showingProof = true;
  compare.onclick = () => {
   showingProof = !showingProof;
   picture.src = './figures/' + (showingProof ? puzzle.reveal : puzzle.figure);
   picture.alt = showingProof ? puzzle.revealAlt : puzzle.alt;
   compare.textContent = showingProof ? 'Show original diagram' : 'Show proof diagram';
  };
 }
 if(book.view==='puzzle'){
  setupInk();
  $('#puzzle-complete').onchange = event => {
   const checkbox = event.currentTarget;
   const state = page();
   const previous = Boolean(state.done);
   state.done = checkbox.checked;
   if (!save()) {
    state.done = previous;
    checkbox.checked = previous;
   }
  };
  $('#notes').oninput=e=>{page().notes=e.target.value;save();};
  main.querySelectorAll('[data-field]').forEach(el=>el.addEventListener(el.type==='radio'?'change':'input',()=>{(page().fields||={})[el.dataset.field]=el.value;save();}));
 }
}
function openDialog(title,body){dialogbody.innerHTML='<h2 id="dialogtitle">'+title+'</h2>'+body;if(!dlg.open)dlg.showModal();}
function closeDialog(){if(!pendingPin)dlg.close();}
dlg.addEventListener('cancel',e=>{if(pendingPin)e.preventDefault();});
function toolsMenu(){openDialog('Book tools','<p>Progress is saved on this device as you work.</p><div class="actions">'+btn('Back up my book','backup','primary')+btn('Restore a backup','restore')+btn('Set up for offline use','install')+btn('Clear all '+puzzles.length+' challenges','clearall','danger')+btn('Close','close')+'</div>');}
function backupMenu(){
 openDialog('Back up your book','<p>The file includes your answers, notes, handwriting and place in the book.</p><p>Choose <b>Mail</b> in the share sheet to email the attachment. Offline, save the message as a draft or tap Send and check Mail’s Outbox. You can also save the file on your iPad.</p><div class="actions">'+btn('Share backup for email','share','primary')+btn('Save backup file','download')+btn('Close','close')+'</div><p class="error" id="sharestatus" role="status"></p>');
}
function backupFile(){const data={format:'prism-cabinet',version:1,created:new Date().toISOString(),book};return new File([JSON.stringify(data)],'Prism-Cabinet-backup-'+new Date().toISOString().slice(0,10)+'.txt',{type:'text/plain'});}
async function shareBackup(){
 const file=backupFile();if(!navigator.canShare?.({files:[file]})){ $('#sharestatus').textContent='File sharing is unavailable here. Save the backup file, then attach it in your mail app.';return;}
 try{await navigator.share({files:[file],title:'Prism Cabinet backup'});}catch(e){if(e.name!=='AbortError')$('#sharestatus').textContent='Mail sharing could not open. Save the file and attach it in Mail.';}
}
function download(){const file=backupFile();const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download=file.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
function validate(b){
 const fail=()=>{throw Error('Invalid backup');},obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),id=i=>Number.isInteger(i)&&puzzles.some(p=>p.id===i);
 if(!obj(b)||!obj(b.pages)||!id(b.last)||!id(b.id)||!['shelf','index','answers','puzzle','answer'].includes(b.view))fail();
 for(const [k,s] of Object.entries(b.pages)){
  const p=puzzles.find(p=>String(p.id)===k);if(!p||!obj(s))fail();
  if(Object.keys(s).some(k=>!['done','notes','fields','ink'].includes(k)))fail();
  if('done'in s&&typeof s.done!=='boolean'||'notes'in s&&typeof s.notes!=='string')fail();
  if('fields'in s){if(!obj(s.fields))fail();for(const [name,val] of Object.entries(s.fields)){
   if(typeof val!=='string')fail();const q=p.questions?.some((_,i)=>name==='q'+i);
   if(!q && !(name==='choice' && p.choices?.includes(val)))fail();
  }}
  if('ink'in s&&(!Array.isArray(s.ink)||s.ink.some(st=>!Array.isArray(st)||!st.length||st.some(pt=>!Array.isArray(pt)||pt.length!==2||pt.some((n,i)=>!Number.isFinite(n)||n<0||n>(i?360:1000))))))fail();
 }
}
async function restoreFile(file){if(!file)return;
 try{const data=JSON.parse(await file.text());if(data.format!=='prism-cabinet'||data.version!==1)throw Error();validate(data.book);
  pinForm('Restore this backup?','This replaces the work on this device with the selected backup. Your current PIN stays in place.',()=>{const prev=book;book=data.book;if(!save()){book=prev;throw Error('There is not enough storage to restore this backup.');}render();toast('Backup restored.');},'Restore book');
 }catch{$('#restorestatus').textContent='This file is not a valid backup for this volume. Your work is still here.';}
}
async function digest(value,salt){const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(value),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:90000,hash:'SHA-256'},material,256);return Array.from(new Uint8Array(bits),n=>n.toString(16).padStart(2,'0')).join('');}
function pinForm(title,info,action,label,setup=false){
 pendingPin=setup;openDialog(title,'<p>'+info+'</p><form id="pinform"><label for="pin">'+(setup?'Choose a 4–8 digit PIN':'Enter your PIN')+'</label><input type="password" class="pin" inputmode="numeric" pattern="[0-9]{4,8}" minlength="4" maxlength="8" id="pin" autocomplete="off" required>'+(setup?'<label for="repeat">Confirm PIN</label><input type="password" class="pin" inputmode="numeric" id="repeat" minlength="4" maxlength="8" autocomplete="off" required>':'')+'<p id="pinerror" class="error" role="alert"></p><div class="dialogbuttons"><button type="submit" class="primary">'+label+'</button>'+(!setup?btn('Cancel','close'):'')+'</div></form>');
 $('#pinform').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,submit=form.querySelector('[type="submit"]');if(submit.disabled)return;submit.disabled=true;const value=$('#pin').value;
 try{if(setup){if(value!==$('#repeat').value)throw Error('The PINs differ. Enter the same PIN twice.');const salt=Array.from(crypto.getRandomValues(new Uint8Array(16))).join('-');const record={salt,hash:await digest(value,salt)};localStorage.setItem(pinKey,JSON.stringify(record));pin=record;}
  else if(!pin||await digest(value,pin.salt)!==pin.hash)throw Error('That PIN did not match. Try again.');
  if(!dlg.open||!form.isConnected)return;action();pendingPin=false;dlg.close();
 }catch(err){if(form.isConnected)$('#pinerror').textContent=err.name==='QuotaExceededError'?'Storage is unavailable. Free device space and try again.':err.message;}finally{submit.disabled=false;}};
}
function installInfo(){openDialog('Take the book offline','<ol><li>Open the book in Safari while online.</li><li>Tap Share, then Add to Home Screen. Enable Open as Web App if offered.</li><li>Launch the Home Screen copy while online, set your book PIN there, and wait for “Ready offline.” Use this copy for your trip.</li><li>Turn on Airplane Mode, turn Wi-Fi off, close the book and reopen it from its icon. Try a puzzle and its answer.</li></ol><p>Keep a backup in Files so you can restore your work if device storage is cleared.</p>'+btn('Close','close'));}
function handleAction(a){
 switch(a){
 case 'close':closeDialog();break;
 case 'install':installInfo();break;
 case 'backup':backupMenu();break;
 case 'share':shareBackup();break;
 case 'download':download();break;
 case 'restore':openDialog('Restore your book','<p>Select a Prism Cabinet backup from Files. You’ll review the replacement before it takes effect.</p><input type="file" id="restorefile" accept=".txt,.json,text/plain,application/json"><p id="restorestatus" role="alert" class="error"></p>'+btn('Cancel','close'));$('#restorefile').onchange=e=>restoreFile(e.target.files[0]);break;
 case 'clearall':case 'clearpage':{const all=a==='clearall',id=book.id;pinForm(all?'Clear the whole book?':'Clear challenge '+num(id)+'?',all?'All answers, notes and handwriting in this volume will be erased.':'Only the answers, notes and handwriting for “'+pNow().title+'” will be erased.',()=>{const previous=book;book=JSON.parse(JSON.stringify(previous));if(all){book.pages={};book.last=1;book.view='shelf';book.id=1;}else delete book.pages[id];if(!save()){book=previous;throw Error('Unable to save the cleared book.');}render();toast(all?'Book cleared.':'Page cleared.');},all?'Clear whole book':'Clear page');break;}
 case 'pen':case 'eraser':inkTool=a;for(const m of ['pen','eraser']){const b=$('[data-act="'+m+'"]');b.classList.toggle('primary',m===a);b.setAttribute('aria-pressed',String(m===a));}break;
 case 'undo':{const h=inkHistory.pop(),ink=page().ink||[];if(h?.deleted)ink.splice(h.i,0,h.deleted);else ink.pop();save();drawInk();break;}
 }
}
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t||startupError)return;if(t.dataset.go)nav(t.dataset.go,Number(t.dataset.id));else if(t.dataset.act)handleAction(t.dataset.act);});
$('#home').onclick=()=>{if(!startupError)nav('shelf');};$('#tools').onclick=()=>{if(!startupError)toolsMenu();};
render();
if(!startupError&&!pin)pinForm('Choose your book PIN','Use this PIN to clear a page, clear the book, or restore a backup. You can open and solve challenges freely.',()=>{}, 'Set PIN',true);
// Report readiness only after this page is controlled and the worker confirms its complete offline cache.
async function checkOffline(){
 const label=$('#offline');
 try{
  if(!('serviceWorker' in navigator))throw Error();
  const reg=await navigator.serviceWorker.register('./sw.js');
  if(reg.installing){const worker=reg.installing;worker.addEventListener('statechange',()=>{if(worker.state==='redundant'&&!navigator.serviceWorker.controller)label.textContent='Offline setup failed · reopen online';});}
  await navigator.serviceWorker.ready;
  const check=()=>{const sw=navigator.serviceWorker.controller;if(!sw){label.textContent='Reopen for offline use';return;}const channel=new MessageChannel();channel.port1.onmessage=e=>{label.textContent=e.data===true?'Ready offline':'Offline copy incomplete';channel.port1.close();};sw.postMessage('verify', [channel.port2]);};
  navigator.serviceWorker.addEventListener('controllerchange',check);check();
 }catch{label.textContent='Offline setup unavailable';}
}
checkOffline();

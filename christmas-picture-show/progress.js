'use strict';
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

$('reset').onclick=()=>{
  const id=number;
  authorize('Clear puzzle '+id,'Remove this puzzle’s highlights and completion mark.',()=>{
    const data=book();delete data[id];replace(data);
  });
};
$('clear-all').onclick=()=>authorize('Clear all puzzles','Remove all saved finds in Christmas Picture Show on this device.',()=>replace({}));
$('export').onclick=async()=>{
  const file=new File([JSON.stringify({format:'christmas-picture-show',version:1,pages:book()})],'Christmas-Picture-Show-progress.json',{type:'application/json'});
  if(navigator.canShare?.({files:[file]})) {
    try{await navigator.share({files:[file],title:'Christmas Picture Show progress'});return;}
    catch(e){if(e.name==='AbortError')return;}
  }
  const url=URL.createObjectURL(file),a=make('a');a.href=url;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
};
function validPageRecord(record,p) {
  if(!record||typeof record!=='object'||Array.isArray(record))return false;
  const n=p.grid.length;
  return Object.entries(record).every(([key,path])=>{
    const i=Number(key);
    if(String(i)!==key||!p.words[i]||!Array.isArray(path)||path.length!==2||
       path.some(k=>!Number.isInteger(k)||k<0||k>=n*n))return false;
    const line=cellsBetween(...path,n).map(k=>p.grid[Math.floor(k/n)][k%n]).join('');
    const word=normalizeWord(p.words[i]);
    if(line!==word && [...line].reverse().join('')!==word)return false;
    return p.kind!=='hidden'||p.paths[i].every(k=>path.includes(k));
  });
}
$('import').onchange=async e=>{
  try {
    const file=e.target.files[0];if(!file)return;if(file.size>1200000)throw Error();
    const data=JSON.parse(await file.text());
    if(data.format!=='christmas-picture-show'||data.version!==1||!data.pages||typeof data.pages!=='object'||Array.isArray(data.pages))throw Error();
    for(const [id,record] of Object.entries(data.pages)){
      const p=puzzles[Number(id)-1];if(!p||String(Number(id))!==id||!validPageRecord(record,p))throw Error();
    }
    authorize('Restore progress','Replace this book’s progress on this device with the backup.',()=>replace(data.pages));
  }catch{$('message').textContent='Choose a valid Christmas Picture Show progress backup.';}
  finally{e.target.value='';}
};
route();
if(!localStorage.getItem(pinKey))authorize('Choose your book PIN','Choose 4–8 digits to protect your saved puzzles when clearing or restoring them.',()=>{},true);

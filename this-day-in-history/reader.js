'use strict';
const byId = id => document.getElementById(id);
const dates = Object.keys(historyDays);
const months = [...new Set(dates.map(key => key.slice(0,7)))];
const pretty = (key, options) => new Date(key + 'T12:00:00').toLocaleDateString('en-US', options);
const full = {month:'long',day:'numeric',year:'numeric'};
const now = new Date();
const today = [now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');
const initial = today < dates[0] ? dates[0] : today > dates.at(-1) ? dates.at(-1) : today;
let current = initial;
byId('today').disabled = !dates.includes(today);
byId('today').onclick = () => { location.hash = today; };
byId('month').add(new Option('All months',''));
for (const month of months) byId('month').add(new Option(pretty(month+'-01',{month:'long',year:'numeric'}),month));
function listDates() {
  const term = byId('search').value.toLocaleLowerCase().trim();
  const list = byId('dates');
  list.replaceChildren();
  for (const key of dates) {
    const entry = historyDays[key];
    if (!key.startsWith(byId('month').value)) continue;
    if (term && !(pretty(key,full)+' '+entry.title+' '+entry.events.map(e=>e.year+' '+e.text).join(' ')).toLocaleLowerCase().includes(term)) continue;
    const li = document.createElement('li'), a = document.createElement('a');
    a.href = '#'+key; a.textContent = pretty(key,full)+' · '+entry.title; li.append(a); list.append(li);
  }
  byId('matches').textContent = list.children.length+' dates';
}
byId('month').onchange = byId('search').oninput = listDates;
function show() {
  const route = location.hash.slice(1), index = route === 'index';
  byId('index').hidden = !index; byId('reader').hidden = index;
  if (index) { listDates(); } else {
    current = dates.includes(route) ? route : initial;
    const {title,events} = historyDays[current], [lead,...more] = events;
    byId('weekday').textContent = pretty(current,{weekday:'long'});
    byId('date').textContent = pretty(current,full); byId('date').dateTime = current;
    byId('year').textContent = lead.year; byId('headline').textContent = title; byId('story').textContent = lead.text;
    byId('more').replaceChildren(...more.map(e => {
      const li=document.createElement('li'), year=document.createElement('b'), text=document.createElement('span');
      year.textContent=e.year; text.textContent=e.text; li.append(year,text); return li;
    }));
    const day = pretty(current,{month:'long',day:'numeric'}), wiki=day.replace(' ','_');
    const a=document.createElement('a'), authors=document.createElement('a');
    a.href='https://en.wikipedia.org/wiki/'+wiki+'#Events'; a.textContent=day+' historical timeline';
    authors.href='https://en.wikipedia.org/w/index.php?title='+wiki+'&action=history';authors.textContent='Contributors and revisions';
    byId('date-source').replaceChildren(a,' · ',authors);
    if (historyDays[current].source) {
      const reference = document.createElement('a');
      reference.href=historyDays[current].source; reference.textContent='Featured event reference';
      byId('date-source').append(' · ',reference);
    }
    if (historyDays[current].relatedSource) {
      const reference=document.createElement('a');
      reference.href=historyDays[current].relatedSource; reference.textContent='Related event reference';
      byId('date-source').append(' · ',reference);
    }
    byId('sources').open=false;
    document.querySelector('book-pager').setPage(dates.indexOf(current)+1,dates.length,'day',n=>location.hash=dates[n-1],()=>{ byId('month').value=current.slice(0,7); byId('search').value=''; location.hash='index'; });
  }
  window.scrollTo(0,0);
}
show(); window.addEventListener('hashchange',show);

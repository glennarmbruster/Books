'use strict';
const byId = id => document.getElementById(id);
const dates = Object.keys(dailyJokes);
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
    const entry = dailyJokes[key];
    if (!key.startsWith(byId('month').value)) continue;
    if (term && !(pretty(key,full)+' '+entry.category+' '+entry.setup).toLocaleLowerCase().includes(term)) continue;
    const li = document.createElement('li'), a = document.createElement('a');
    a.href = '#'+key; a.textContent = pretty(key,full)+' · '+entry.category; li.append(a); list.append(li);
  }
  byId('matches').textContent = list.children.length+' dates';
}
byId('month').onchange = byId('search').oninput = listDates;
function reveal(visible) {
  byId('punchline').textContent = visible ? dailyJokes[current].punchline : '';
  byId('reveal').setAttribute('aria-expanded', String(visible));
  byId('reveal').textContent = visible ? 'Hide punchline' : 'Reveal punchline';
}
byId('reveal').onclick = () => reveal(byId('reveal').getAttribute('aria-expanded') === 'false');
function show() {
  const route = location.hash.slice(1), index = route === 'index';
  byId('index').hidden = !index; byId('reader').hidden = index;
  if (index) { listDates(); } else {
    current = dates.includes(route) ? route : initial;
    const entry = dailyJokes[current];
    byId('weekday').textContent = pretty(current,{weekday:'long'});
    byId('date').textContent = pretty(current,full); byId('date').dateTime = current;
    byId('category').textContent = entry.category;
    byId('setup').textContent = entry.setup;
    reveal(false);
    document.querySelector('book-pager').setPage(dates.indexOf(current)+1,dates.length,'day',n=>location.hash=dates[n-1],()=>{ byId('month').value=current.slice(0,7); byId('search').value=''; location.hash='index'; });
  }
  window.scrollTo(0,0);
}
show(); window.addEventListener('hashchange',show);

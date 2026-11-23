'use strict';

const byId = id => document.getElementById(id);
const isWordBook = document.body.dataset.kind === 'word';
const dates = Object.keys(calendarEntries);
const dateFormat = new Intl.DateTimeFormat('en-US', { month:'long', day:'numeric', year:'numeric' });
const monthFormat = new Intl.DateTimeFormat('en-US', { month:'long', year:'numeric' });
const weekdayFormat = new Intl.DateTimeFormat('en-US', { weekday:'long' });
const rows = dates.map(key => {
  const day = new Date(key + 'T12:00:00');
  const entry = calendarEntries[key];
  const label = isWordBook ? entry.word : entry.setup;
  const keywords = isWordBook ? [entry.pos, entry.definition] : [entry.category];
  const date = dateFormat.format(day);
  return { key, date, label, search:[key, date, label, ...keywords].join(' ').toLocaleLowerCase() };
});

function localDate() {
  const now = new Date();
  return [now.getFullYear(), String(now.getMonth()+1).padStart(2,'0'), String(now.getDate()).padStart(2,'0')].join('-');
}

const monthSelect = byId('month');
for (const month of new Set(dates.map(key => key.slice(0,7)))) {
  monthSelect.add(new Option(monthFormat.format(new Date(month + '-01T12:00:00')), month));
}

function showIndex() {
  const term = byId('search').value.toLocaleLowerCase().trim();
  const matching = rows.filter(row => row.key.startsWith(monthSelect.value) && row.search.includes(term));
  const fragment = document.createDocumentFragment();
  for (const row of matching) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const time = document.createElement('time');
    time.dateTime = row.key;
    time.textContent = row.date;
    link.href = '#' + row.key;
    link.append(time, document.createTextNode(row.label));
    item.append(link);
    fragment.append(item);
  }
  byId('entries').replaceChildren(fragment);
  byId('matches').textContent = matching.length ? matching.length + (matching.length === 1 ? ' entry' : ' entries') : 'No entries match your search.';
}

let current;
function reveal(open) {
  byId('punchline').textContent = open ? calendarEntries[current].punchline : '';
  byId('reveal').setAttribute('aria-expanded', String(open));
  byId('reveal').textContent = open ? 'Hide punchline' : 'Reveal punchline';
}
if (!isWordBook) byId('reveal').onclick = () => reveal(byId('reveal').getAttribute('aria-expanded') === 'false');

function route() {
  const routeKey = location.hash.slice(1);
  const today = localDate();
  const indexOpen = routeKey === 'index';
  byId('today').disabled = !dates.includes(today);
  byId('index').hidden = !indexOpen;
  byId('reader').hidden = indexOpen;
  if (indexOpen) {
    showIndex();
  } else {
    const defaultDate = today < dates[0] ? dates[0] : dates.at(-1);
    current = dates.includes(today) ? today : defaultDate;
    if (dates.includes(routeKey)) current = routeKey;
    const page = dates.indexOf(current);
    const entry = calendarEntries[current];
    byId('date').dateTime = current;
    byId('date').textContent = rows[page].date;
    byId('weekday').textContent = weekdayFormat.format(new Date(current+'T12:00:00'));
    byId('heading').textContent = isWordBook ? entry.word : entry.setup;
    byId('category').textContent = isWordBook ? entry.pos : entry.category;
    if (isWordBook) {
      byId('definition').textContent = entry.definition;
      byId('example').textContent = entry.example;
    } else {
      reveal(false);
    }
    document.querySelector('book-pager').setPage(page + 1, dates.length, 'day',
      n => { location.hash = dates[n-1]; },
      () => { monthSelect.value = current.slice(0,7); byId('search').value = ''; location.hash = 'index'; });
  }
  window.scrollTo(0,0);
}

byId('today').onclick = () => { location.hash = localDate(); };
monthSelect.onchange = byId('search').oninput = showIndex;
window.addEventListener('hashchange',route);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  const today = localDate();
  byId('today').disabled = !dates.includes(today);
  if (!location.hash && dates.includes(today) && current !== today) route();
});
route();

async function prepareOffline() {
  const status = byId('offline');
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') {
    status.textContent = 'Open this book from your online bookshelf to save it offline.';
    return;
  }
  try {
    const registration = await navigator.serviceWorker.register('./sw.js');
    const worker = registration.installing || registration.waiting || registration.active;
    if (!worker) throw new Error('Book download unavailable');
    function updateStatus() {
      if (worker.state === 'activated') status.textContent = 'Ready offline';
      if (worker.state === 'redundant') status.textContent = 'Reopen online to finish downloading.';
    }
    worker.addEventListener('statechange', updateStatus);
    updateStatus();
  } catch {
    status.textContent = 'Reopen online to finish downloading.';
  }
}
prepareOffline();

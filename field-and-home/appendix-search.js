// Shared by the bookshelf reader and the self-contained EPUB.
function mountAppendixSearch(page) {
  const slot = page.querySelector('.appendix-search-slot');
  const tables = page.querySelector('.appendix-tables');
  if (!slot || !tables || slot.firstChild) return;
  const home = tables.parentNode;
  const contents = home.querySelector('nav');
  const make = tag => document.createElementNS('http://www.w3.org/1999/xhtml', tag);
  const words = value => value.normalize('NFKD').toLowerCase()
    .replace(/[\u0300-\u036f]/g, '').match(/[a-z0-9]+/g) || [];
  const sections = Array.from(tables.querySelectorAll('.reference-section'), section => {
    const title = section.querySelector('caption').textContent;
    return {section, rows: Array.from(section.querySelectorAll('tbody tr'), row =>
      ({row, keys: words([title, ...Array.from(row.cells, cell => cell.lastChild.textContent)].join(' '))}))};
  });
  const label = make('label'), input = make('input'), clear = make('button'), status = make('p');
  label.textContent = 'Search this appendix';
  label.htmlFor = input.id = 'appendix-query';
  input.type = 'search';
  input.placeholder = 'Food, category, or keyword';
  input.autocomplete = 'off';
  clear.type = 'button';
  clear.textContent = 'Clear';
  clear.hidden = true;
  status.setAttribute('role', 'status');
  slot.append(label, input, clear, status);

  function filter() {
    const terms = words(input.value);
    const active = input.value.trim() !== '';
    let count = 0;
    for (const {section, rows} of sections) {
      let matches = 0;
      for (const {row, keys} of rows) {
        const show = !active || (terms.length > 0 && terms.every(term => keys.some(k => k.startsWith(term))));
        row.hidden = !show;
        if (show) matches++;
      }
      section.hidden = !matches;
      count += matches;
    }
    // Bring matches up to the keyboard; keep handling notes available below them.
    if (active && tables.previousElementSibling !== slot) slot.after(tables);
    if (!active && tables.parentNode !== home) home.appendChild(tables);
    contents.hidden = active;
    clear.hidden = !input.value;
    status.textContent = !active ? '' : count ? count + ' matching ' + (count === 1 ? 'entry' : 'entries')
      : 'No matches in this appendix. Try another word.';
  }
  input.addEventListener('input', filter);
  clear.addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
}
document.addEventListener('DOMContentLoaded', () => mountAppendixSearch(document));

// All readers use the printed entry number, independent of filters or reading progress.
class BookNumberJump extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({mode: 'open'});
    root.innerHTML = `
      <style>
        :host { display:block; margin:10px 0 16px; }
        form { display:flex; flex-wrap:wrap; gap:7px 9px; align-items:center; font:inherit; }
        label { font-weight:600; }
        input,button { box-sizing:border-box; font:inherit; border:1px solid var(--line,#a39985);
          color:inherit; background:transparent; border-radius:5px; min-height:44px; padding:6px 10px; }
        input { width:6.2em; font-size:16px; }
        button { cursor:pointer; font-weight:600; }
        :focus-visible { outline:3px solid var(--brass,#aa823c); outline-offset:2px; }
        [role=status]:not(:empty) { flex-basis:100%; font-size:.9em; }
      </style>
      <form novalidate>
        <label for="entry"></label>
        <input id="entry" inputmode="numeric" enterkeyhint="go" autocomplete="off" aria-describedby="message">
        <button type="submit">Go</button><span id="message" role="status"></span>
      </form>`;
    const input = root.querySelector('input');
    const label = 'Go to ' + this.getAttribute('noun') + ' #';
    const maximum = Number(this.getAttribute('max'));
    root.querySelector('label').textContent = label;
    input.placeholder = '1–' + maximum;
    input.addEventListener('input', () => this.showError(''));
    root.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      const digits = input.value.trim().replace(/^#\s*/, '');
      const number = Number(digits);
      if (!/^\d+$/.test(digits) || !Number.isSafeInteger(number) || number < 1 || number > maximum) {
        this.showError('Enter a whole number from 1 to ' + maximum + '.');
        input.focus();
        input.select();
        return;
      }
      this.showError('');
      this.dispatchEvent(new CustomEvent('open-book-number', {bubbles:true, detail:number}));
    });
  }

  showError(message) {
    this.shadowRoot.querySelector('[role=status]').textContent = message;
    this.shadowRoot.querySelector('input').setAttribute('aria-invalid', String(Boolean(message)));
  }
}
customElements.define('book-number-jump', BookNumberJump);

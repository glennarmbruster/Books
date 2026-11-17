// Keep each book's own page order and let its reader handle navigation and saving.
class BookPager extends HTMLElement {
  setPage(number, total, noun, openPage, openIndex) {
    if (!this.shadowRoot) {
      const root = this.attachShadow({mode:'open'});
      root.innerHTML = `
        <style>
          :host{display:block;margin:1.4rem 0 .5rem;color:inherit}
          nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.55rem;border-top:1px solid var(--line,#aaa);padding-top:.8rem}
          form{display:flex;align-items:center;flex-wrap:wrap;gap:.4rem}label{font:inherit}
          button,input{font:inherit;color:inherit;background:transparent;border:1px solid currentColor;border-radius:.35rem;box-sizing:border-box;min-height:44px;padding:.35rem .6rem}
          input{width:6.4em;font-size:16px}button{cursor:pointer}button:disabled{opacity:.4;cursor:default}
          :focus-visible{outline:3px solid currentColor;outline-offset:2px}
        </style>
        <nav aria-label="Browse this book"><button type="button" id="prev">← Back</button>
          <button type="button" id="index">Index</button>
          <form><label for="number"></label><input type="number" id="number" min="1" step="1" inputmode="numeric" enterkeyhint="go" required><button>Go</button></form>
          <button type="button" id="next">Next →</button></nav>`;
    }
    const root=this.shadowRoot, input=root.getElementById('number');
    root.querySelector('label').textContent='Go to '+noun+' #';
    input.placeholder=String(number);input.max=String(total);input.value='';
    for (const [id, target] of [['prev',number-1],['next',number+1]]) {
      const button=root.getElementById(id);
      button.disabled=target<1||target>total;
      button.onclick=()=>openPage(target);
    }
    root.getElementById('index').onclick=openIndex;
    root.querySelector('form').onsubmit=event=>{
      event.preventDefault();
      if(input.checkValidity())openPage(input.valueAsNumber);
    };
  }
}
customElements.define('book-pager',BookPager);

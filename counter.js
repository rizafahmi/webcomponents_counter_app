class Counter extends HTMLElement {
  constructor() {
    super();
    this.state = {
      countNumber: 0,
    };
  }
  connectedCallback() {
    const template = document.querySelector('#counter');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('c-ounter', Counter);

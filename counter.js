class Counter extends HTMLElement {
  constructor() {
    super();
    this.state = {
      countNumber: 0,
    };
  }
  connectedCallback() {
    const template = document.querySelector('#counter');
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('c-ounter', Counter);

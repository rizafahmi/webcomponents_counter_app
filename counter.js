class Counter extends HTMLElement {
  constructor() {
    super();
    this.state = {
      countNumber: 0,
    };
  }
  connectedCallback() {
    this.innerHTML = `${this.state.countNumber}`;
  }
}

customElements.define('c-ounter', Counter);

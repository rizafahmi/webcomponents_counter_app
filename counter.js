class Counter extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#counter');
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));

    this.digit = shadow.querySelector('.digit');
    this.incrementButton = shadow.querySelector('.increment');
    this.decrementButton = shadow.querySelector('.decrement');

    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleDecrementButton = this.handleDecrementButton.bind(this);
  }
  connectedCallback() {
    this.digit.innerHTML = this.value;

    this.incrementButton.addEventListener('click', this.handleIncrementButton);
    this.decrementButton.addEventListener('click', this.handleDecrementButton);
  }
  disconnectedCallback() {
    this.incrementButton.removeEventListener(
      'click',
      this.handleIncrementButton
    );
    this.decrementButton.removeEventListener(
      'click',
      this.handleDecrementButton
    );
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.digit.innerHTML = this.value;
  }
  get value() {
    return this.getAttribute('value');
  }
  set value(val) {
    this.setAttribute('value', val);
  }
  static get observedAttributes() {
    return ['value'];
  }
  handleIncrementButton(e) {
    this.value = +this.value + 1;
  }
  handleDecrementButton(e) {
    this.value = +this.value - 1;
  }
}

customElements.define('c-ounter', Counter);

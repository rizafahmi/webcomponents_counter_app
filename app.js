import './counter.js';

const template = document.querySelector('#counter');
const root = document.querySelector('#root');

const counter = document.createElement('c-ounter');
counter.setAttribute('value', 19);
root.appendChild(counter);

for (let i = 0; i < 8; i += 1) {
  const counter = document.createElement('c-ounter');
  counter.setAttribute('value', i);
  console.log(counter);
  root.appendChild(counter);
}

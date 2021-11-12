const template = document.querySelector('#counter');
const root = document.querySelector('#root');

const counter = document.createElement('c-ounter');
root.appendChild(counter);

for (let i = 0; i < 8; i += 1) {
  const counter = document.createElement('c-ounter');
  root.appendChild(counter);
}

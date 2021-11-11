const template = document.querySelector('#counter');
const root = document.querySelector('#root');

root.appendChild(template.content.cloneNode(true));
root.appendChild(template.content.cloneNode(true));

for (let i = 0; i < 8; i += 1) {
  root.appendChild(template.content.cloneNode(true));
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let boxes = document.getElementById('boxes');
createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

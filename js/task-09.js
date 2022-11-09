const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  const generateColor = getRandomHexColor();
  body.style.backgroundColor = generateColor;
  colorName.textContent = generateColor;
}

changeColorBtn.addEventListener('click', changeBodyColor);

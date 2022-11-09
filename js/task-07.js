const controlInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function onInputChangeTextSize(event) {
  const textSizeValue = event.currentTarget.value;

  text.style.fontSize = `${textSizeValue}px`;
}

controlInput.addEventListener('input', onInputChangeTextSize);

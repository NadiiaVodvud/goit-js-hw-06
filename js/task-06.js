const inputValue = document.querySelector('#validation-input');

function onInputBlur(event) {
  const validLength = event.currentTarget.value.trim().length;

  // console.log(validLength);
  // console.log(typeof validLength);
  // console.log(inputValue.dataset.length);

  if (validLength == inputValue.dataset.length) {
    inputValue.classList.add('valid');
    inputValue.classList.remove('invalid');
  } else {
    inputValue.classList.add('invalid');
    inputValue.classList.remove('valid');
  }
}

inputValue.addEventListener('blur', onInputBlur);
console.log(inputValue);

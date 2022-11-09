const inputValue = document.querySelector('#validation-input');
// console.log(inputValue);

function onInputBlur(event) {
  const validLength = event.currentTarget.value.trim().length;

  //   console.log(validLength);
  //   console.log(typeof validLength);
  //   console.log(inputValue.dataset.length);

  if (validLength == inputValue.dataset.length) {
    return inputValue.classList.add('valid');
  }
  inputValue.classList.add('invalid');
}

inputValue.addEventListener('blur', onInputBlur);

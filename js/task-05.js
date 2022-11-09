const refs = {
  inputValue: document.querySelector('#name-input'),
  outputValue: document.querySelector('#name-output'),
};

refs.inputValue.addEventListener('input', event => {
  if (event.currentTarget.value !== '') {
    return (refs.outputValue.textContent = event.currentTarget.value);
  }

  refs.outputValue.textContent = 'Anonymous';
});

// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє
//  його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися
//  рядок "Anonymous".
const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');

const refs = {
  input: document.querySelector('#name-input');
  output: document.querySelector('#name-output');
}
// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);

refs.input.addEventListener("input", onInputChange);

function onInputFocus() {
  console.log("інпут отримав фокус");
}
function onInputBlur() {
  console.log("інпут втратив фокус");
}
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.output.textContent = event.currentTarget.value;
}
// function onLicenseChenge(event) {
//   console.log(event);
// }



// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.currentTarget);
//   console.log('це сабміт форми без перезагрузки сторінки');
// }

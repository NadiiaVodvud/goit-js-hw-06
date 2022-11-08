let counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const actions = document.querySelectorAll('#counter');
console.log(actions);
console.log(actions.firstElementChild);

const addValueBtn = document.querySelector('[data-action="increment"]');
// console.log(addValueBtn);

addEventListener('click', () => {});

// function addButtonClickHandler() {
//   console.log('Клік');
// }

// function handleAddButtonClick() {
//   console.log('Клік');
// }
// function onAddButtonClick() {
//   console.log('Клік');
// }

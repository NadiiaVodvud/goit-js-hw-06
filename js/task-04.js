const value = document.querySelector('#value');
const addValueBtn = document.querySelector('[data-action="increment"]');
const subValueBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

// console.log(addValueBtn);
// console.log(subValueBtn);
// console.log(value);
// console.log(counterValue);

const onAddBtn = () => (value.textContent = counterValue += 1);
const onSubBtn = () => (value.textContent = counterValue -= 1);

addValueBtn.addEventListener('click', onAddBtn);
subValueBtn.addEventListener('click', onSubBtn);

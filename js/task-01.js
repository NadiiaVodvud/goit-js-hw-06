const listItemEl = document.querySelector('.item');
console.log(listItemEl);
console.dir(listItemEl);

const listItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', listItemsEl.length);

const title = document.querySelectorAll('h2');
console.log('Category:', title.textContent);

// console.log(listItemEl.classList);
// listItemEl.classList.add('js-items');
// listItemEl.classList.remove('js-items');
// listItemEl.classList.toggle('js-items');

// const firstEl = listItemsEl.firstElementChild;
// const allchildrensEl = listItemsEl.children;
// const firstEl = listItemsEl.lastElementChild;
// const secondEl = listItemsEl.children[1];

//створити елемент
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = ' it something';
// titleEl.console.log(titleEl);
// document.body.appendChild(titleEl); // в кінець
// document.body.insertBefore(titleEl, firstElementChild); //  перед n- елементом

// const imageEl = document.createElement('img'); // додати картинку
// imageEl.src = 'https://...';
// imageEl.alt = "dkhbk/ln";

// body.append(titleEl, imageEl); // декілька незалежних обєктів в кінець
// body.prepend(titleEl, imageEl); // декілька незалежних обєктів на початок

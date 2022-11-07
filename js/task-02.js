const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const createItem = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');

    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    // console.log(itemEl);
    return itemEl;
  });
};

const items = createItem(ingredients);

// console.log(listEl);

listEl.append(...items);

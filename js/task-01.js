const listItemsEl = document.querySelector('ul');
console.log('Number of categories:', listItemsEl.children.length);

for (const item of listItemsEl.children) {
  const titleEl = item.firstElementChild;
  console.log('Category:', titleEl.textContent);
  const itemsEl = item.lastElementChild;
  console.log('Elements:', itemsEl.children.length);
}

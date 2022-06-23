const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const createItemEl = (nameEl) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = nameEl;
  return itemEl;
};

ingredients.forEach(ingredient => {
  listEl.append(createItemEl(ingredient));
});

console.log(listEl);






const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListEl = document.querySelector("#ingredients");

const ingridientEl = document.createElement("li");
ingridientEl.classList.add("item");

const makeIngridientsList = ingredients.map(ingridient =>{
  const ingridientEl = document.createElement("li");
  ingridientEl.classList.add("item");
  ingridientEl.textContent = ingridient;
  console.log(ingridientEl);
  return ingridientEl;
});


ingridientsListEl.append(...makeIngridientsList);


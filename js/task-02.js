const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

for (const ingredient of ingredients) {
  const itemIngredient = document.createElement("li");
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.toggle("item");
  ingredientsList.append(itemIngredient);
}

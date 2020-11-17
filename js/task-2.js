const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
});

document.querySelector('#ingredients').append(...ingredientsList);
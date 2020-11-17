const listEl = document.querySelector('#categories');

console.log(`В списке ${listEl.children.length} категории.`);

const liItemEl = listEl.querySelectorAll('li.item');

liItemEl.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent}\nКоличество элементов: ${children[1].children.length}`,
  ),
);
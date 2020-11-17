const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () =>
    (counterSpan.textContent = counterValue -= 1);
  
const onIncrementBtnClick = () =>
    (counterSpan.textContent = counterValue += 1);

btnDecrementRef.addEventListener('click', onDecrementBtnClick);
btnIncrementRef.addEventListener('click', onIncrementBtnClick);
const inputRef = document.querySelector('#name-input');
let nameOutputRef = document.querySelector('#name-output');

const onChangeInputName = event => {
  nameOutputRef.textContent = event.target.value;
  if (event.target.value === '') {
    nameOutputRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener('input', onChangeInputName);
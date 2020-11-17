const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length === Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add('valid')
    : event.currentTarget.classList.add('invalid');
}

function onInputFocus(event) {
  event.currentTarget.classList.remove('invalid', 'valid');
}
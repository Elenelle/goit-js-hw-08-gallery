const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

const onInputMoveControl = () => {
  textRef.style.fontSize = inputRef.value + 'px';
};

inputRef.addEventListener('input', onInputMoveControl);
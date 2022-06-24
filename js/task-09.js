

const bodyEl = document.querySelector('body');
const textOutputEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color');

changeColorBtnEl.addEventListener('click', onClickBtnEvent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onClickBtnEvent() {
  const changeColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeColor;
  textOutputEl.textContent = changeColor;
};
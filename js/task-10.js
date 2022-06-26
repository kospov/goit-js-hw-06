const inputNumberBoxesEl = document.querySelector('[type="number"]');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');
const boxesCollection = document.querySelector('[id="boxes"]');

const boxes = boxesCollection.children;

createBoxesBtn.addEventListener('click', onClickCreateBtn);

destroyBoxesBtn.addEventListener('click', onClickDestroyBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');
    boxEl.style.width = (30 + i*10) + 'px';
    boxEl.style.height = (30 + i*10) + 'px';
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesCollection.append(boxEl);
  }
};

function destroyBoxes() {
  boxesCollection.innerHTML = '';
  inputNumberBoxesEl.value = '';
  console.log(`All previous boxes was destroied.`);
  };

function onClickCreateBtn() {
  let numberBoxes = 0;
  numberBoxes = Number(inputNumberBoxesEl.value);
  createBoxes(numberBoxes);
  console.log(`${numberBoxes} boxes was created.`);
  inputNumberBoxesEl.value = '';
};

function onClickDestroyBtn() {
  destroyBoxes();
};
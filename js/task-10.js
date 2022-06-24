const inputNumberBoxesEl = document.querySelector('[type="number"]');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');
const boxesCollection = document.querySelector('[id="boxes"]');

const boxes = boxesCollection.children;

createBoxesBtn.addEventListener('click', 
  inputNumberBoxesEl.addEventListener('blur', (event) => {
    let numberBoxes = 0;

    if (event.currentTarget.value > Number(event.currentTarget.getAttribute('max')) || event.currentTarget.value < Number(event.currentTarget.getAttribute('min'))) {
      alert(`Введите число в диапазоне от ${event.currentTarget.getAttribute('min')} до ${event.currentTarget.getAttribute('max')}`);
    } else {
      numberBoxes = Number(event.currentTarget.value);
    };
    
    createBoxes(numberBoxes);

    console.log(`${numberBoxes} boxes was created.`);    
  }),
);

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
  createBoxes(numberBoxes);
};

function onClickDestroyBtn() {
  destroyBoxes();
};



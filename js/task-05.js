const userInputEl = document.querySelector('#name-output');
const inputFormEl = document.querySelector('#name-input');

document.addEventListener('input', (event) => {
    event.target.value ? userInputEl.textContent = event.target.value : userInputEl.textContent = 'Anonymous';
});
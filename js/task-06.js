const inputEl = document.querySelector('[id="validation-input"]');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});

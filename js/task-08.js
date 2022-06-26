const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitEvent);

function onSubmitEvent(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        alert('Bсі поля повинні бути заповнені.');
    } else {
        const userData = {
            Email: event.currentTarget.elements.email.value,
            Password: event.currentTarget.elements.password.value,
        };
        console.log(userData);
    };
    formEl.reset();
};



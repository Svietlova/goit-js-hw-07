'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.elements.email.value !== "" && event.target.elements.password.value !== "") {
        handleLogin(event);
    } else {
        alert('All form fields must be filled in');
    }
});

function handleLogin(event) {
    const formInfo = {
        email: '',
        password: '',
    };
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    formInfo.email = email.trim();
    formInfo.password = password.trim();

    console.log(formInfo);
    loginForm.reset();
}

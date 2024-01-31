'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleLogin); 

function handleLogin(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const formInfo = {
        email,
        password,
    }
    
    if (email === "" || password === "") {
    alert('All form fields must be filled in');
    } else {
        formInfo.email = email.trim();
        formInfo.password = password.trim()
    }
    console.log(formInfo);
    loginForm.reset();
};

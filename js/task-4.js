'use strict';

const loginForm = document.querySelector("form");
console.dir(loginForm);
const btn = document.querySelector("button")
console.dir(btn);

loginForm.addEventListener("submit", handleLogin); 

function handleLogin(event) {
    event.preventDefault();

};
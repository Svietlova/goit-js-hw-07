'use strict';

const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

input.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();

    if (inputValue !== "") {
        output.textContent = inputValue;
    } else {
        output.textContent = "Anonymous";
    };
});
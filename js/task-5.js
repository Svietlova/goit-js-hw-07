'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector(".color");

function changeColorHandler(event) {

  const resultColor = getRandomHexColor();
  body.style.backgroundColor = resultColor;
  span.textContent = resultColor;
}

button.addEventListener("click", changeColorHandler);
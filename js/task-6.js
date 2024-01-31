'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please, enter a number from 1 to 100 :)');
  }
});

function createBoxes(amount) {
  let size = 30;
  container.innerHTML = '';
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.marginRight = '15px';
    box.style.marginBottom = '15px';
    box.style.backgroundColor = getRandomHexColor();
    container.appendChild(box);
    size += 10;
  };
};

btnDestroy.addEventListener('click', () => {
  container.innerHTML = '';
});

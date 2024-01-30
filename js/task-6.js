'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');
const inputNumber = document.getElementsByTagName('input');

function createBoxes(amount) {
  let sizeStart = 30;
  let divArr = [];
  for (let i = 0; i < amount; i++) {
    const div = `<div class="box" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${sizeStart}px; height: ${sizeStart}px;"></div>`;
    divArr.push(div);
    sizeStart += 10;
  };
  container.insertAdjacentHTML('beforeend', divArr);
};

btnCreate.addEventListener('click', () => {
  if (Number(inputNumber.value) > 100) {
    alert('Please, enter a number from 1 to 100 :)');
  };
    createBoxes(Number(inputNumber.value));
});
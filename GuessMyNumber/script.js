'use strict';

const randomNumber = Math.floor(Math.random() * 21);
let score = 20;
console.log(randomNumber);

// document.querySelector('.number').textContent = randomNumber;

const userInput = function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber);

  if (!inputNumber) {
    document.querySelector('.message').textContent = 'Not a  Number';
  } else if (inputNumber === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.highscore').textContent = score;
  } else if (inputNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', userInput);
document.querySelector('.again').addEventListener('click', function () {});

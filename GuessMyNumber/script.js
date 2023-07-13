'use strict';

let randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);

let score = 20;
let highscore = 0;

// Function created for repetetive lines of code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = randomNumber;

const userInput = function () {
  let inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber);
  if (!inputNumber) {
    displayMessage('Not a  Number');
  } else if (inputNumber === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputNumber !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   inputNumber > randomNumber ? 'Too High' : 'Too Low';
      //
      displayMessage(inputNumber > randomNumber ? 'Too High' : 'Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', userInput);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;

  userInput();
});

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

let scores, currentScore, playing, activeplayer;

const init = function () {
  current0El.textContent = 0;
  current0El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player-winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player-active');
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activeplayer = 0;
};

init();

//function to switch player

const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    // Check if the rolled dice is 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore = currentScore + dice;
      // console.log(currentScore);
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      // document.querySelector(
      //   `.player--${activeplayer}`
      // ).textContent = `Congratulations!! player--${activeplayer} wins!!`;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

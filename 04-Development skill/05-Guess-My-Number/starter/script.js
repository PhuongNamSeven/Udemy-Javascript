'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct answer';
// document.querySelector('.number').textContent = 12;

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

const result = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = result;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'no number';
    } else if (guess === result) {
        document.querySelector('.message').textContent = 'true';
        document.querySelector('body').style.backgroundColor = '#402891';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > result) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lose';
        }
    } else if (guess < result) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lose';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    const number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = number;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#312442';
})
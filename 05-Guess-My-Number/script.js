'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✨ Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value); // Input field get a string
  console.log(guess, typeof guess);
  //   document.querySelector('.message').textContent = '✨ Correct Number!';

  if (!guess) {
    document.querySelector('.message').textContent = '😯 No number!';
  }
});

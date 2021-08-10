'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); // Only first one will get selected
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // modal.style.display = 'block';
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
// NOT closeModal(), NOT call closeModal(), declare / define

overlay.addEventListener('click', closeModal);

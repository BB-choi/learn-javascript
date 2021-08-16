'use strict';

/*
const bookings = [];

// const createBooking = function (
//   flightNum,
//   price = 199 * numPassengers // ERROR 👉 order
//   numPassengers = 1,
// ) {
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', 1000); // can't skip defalut parameter(numPassengers)
createBooking('LH123', undefined, 1000);
*/

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 232131231231,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 232131231231) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight); //LH234
// console.log(jonas); // {name: "Mr. Jonas Schmedtmann", passport: 232131231231}

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas; // copy only refernce

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);

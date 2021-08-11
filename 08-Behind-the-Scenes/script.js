'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Jonas
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; // new variable

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'; // reassign, redefine
      // const output = 'NEW OUTPUT!'; // new variable

      const str = `Oh, and you're a millenial, ${firstName}`; // Steven
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ReferenceError: str is not defined
    console.log(millenial); // var variables are function scoped. NOT block scope
    // console.log(add(2, 3)); // function 👉 block scope (ONLY in strict mode)
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // Reference Error
// printAge();
*/

// Variables
console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization, still in TDZ
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const variable, in TDZ
const addExpr = function (a, b) {
  return a + b;
};

// const addArrow = (a, b) => a + b;

//Uncaught TypeError: addExpr is not a function 👉 undefined
// var addExpr = function (a, b) {
//   return a + b;
// };

console.log(addArrow); // undefined
var addArrow = (a, b) => a + b;

// Exmaple

console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // numProducts === undefined

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // create a property on the window object
let y = 2; // NOT create
const z = 3; // NOT create

console.log(x === window.x); // TRUE x is a property of the window object.
console.log(x === window.y); // false
console.log(x === window.z); // false

'use strict';

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

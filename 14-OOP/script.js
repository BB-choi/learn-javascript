'use strict';

/*
const Person = function (firstName, birthYear) {
  // console.log(this);

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__);
// Object.protype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 4, 3, 1, 6, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); // __proto__ : HTMLHeadingElement, HTMLElement, Element, Node, EventTarget, Object

console.dir(x => x + 1);
*/

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 😉');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); // Hey Jessica

// 1. Classes are NOT hoisted
// 2. Clasees are first-class citizens
// 3. Classes are excuted in strict mode

// const walter = new PersonCl('Walter', 1965);
const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// account.latest(50); // error. latest is not a function
account.latest = 50;
console.log(account.movements);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log('Hey there 😉');
  console.log(this);
};

const jonas = new Person('Jonas', 1991);

Person.hey();
// jonas.hey(); // error.

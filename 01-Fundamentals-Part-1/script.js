/* let js = 'amzing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");//값
console.log(23);

let firstName = "Jonas";
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM"; // 특수문자 _,$만 사용가능
let $function = 27; //예약어

let person = 'jonas';//첫 대문자는 객체지향에서 사용
let PI = 3.1415; // 변하지않는, 상수

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher'; // 좋은 예
//descriptive


let job1 = 'programmer';
let job2 = 'teacher'; // 나쁜 예



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year); // 변수 year의 값도 undefined
console.log(typeof year); // 변수 year의 type도 undefined

year = 1991;
console.log(typeof year);

console.log(typeof null); //object


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job; 

var job = 'programmer';
job = 'teacher';
*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Math operators
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, < , >=, <=
console.log(ageSarah >= 18);

const isFulAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
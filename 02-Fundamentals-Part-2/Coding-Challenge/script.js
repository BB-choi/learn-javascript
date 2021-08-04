'use strict';
/*
// Coding Challenge #1

const calcAverage = (score1, score2, scrore3) => (score1 + score2 + scrore3) / 3;

// TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins Win 🎉 (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas Win 🎉 (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log('No team wins!');
}

checkWinner(scoreDolphins, scoreKoalas);

//TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas); */

// Coding Challenge #2

const calcTip = bill => (bill >= 50 && bill <= 300) ?
    bill * 0.15 : bill * 0.2;
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];
console.log(bills, tips);

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(totals);
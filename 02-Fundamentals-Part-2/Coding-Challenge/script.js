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

checkWinner(scoreDolphins, scoreKoalas); 

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


// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higer than ${john.fullName}'s BMI (${john.bmi}) !`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higer than ${mark.fullName}'s BMI (${mark.bmi}) !`);
}
*/

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    // console.log(`---${i}---`);

    // tips.push(calcTip(bills[i])); // calculate twice
    // totals.push(bills[i] + tips[i]);

    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip)
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage(totals));

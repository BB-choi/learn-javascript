'use strict';
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descKorea = describeCountry('Korea', 51, 'Seoul');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(descKorea);
console.log(descGermany);
console.log(descPortugal);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const Korea1 = percentageOfWorld1(51);
const Korea2 = percentageOfWorld2(51);

const percentageOfWorld3 = population => (population / 7900) * 100;
const Korea3 = percentageOfWorld3(51);
console.log(Korea1, Korea2, Korea3);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
};

console.log(describePopulation('Korea', 51));
console.log(describePopulation('China', 1441));

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const populations = [51, 10, 20, 30];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

const neighbours = ['China', 'Russia', 'Japan'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany'))
    console.log('Probably not a central European country :D');

// const numJapan = neighbours.indexOf('Japan');
neighbours[neighbours.indexOf('Japan')] = 'Country';
console.log(neighbours);

const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 51,
    neighbours: ['China', 'Russia', 'Japan']
};
console.log(myCountry);

console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 51,
    neighbours: ['China', 'Russia', 'Japan'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        // this.isIsland = !Boolean(this.neighbours.length);
        // return this.isIsland
    }
};

myCountry.describe();
myCountry.checkIsland();
// console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);


for (let voter = 1; voter <= 50; voter++)
    console.log(`Voter number ${voter} is currently voting 🗳`);


const populations = [51, 10, 20, 30];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}


console.log(percentages, percentages2);
*/

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(i + "----------------------");
    console.log(listOfNeighbours[i]);

    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(listOfNeighbours[i][j]);
    }
}
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
console.log(neighbours); */

const myCountry = {
    country: 'Korea',
    capital: 'Seoul',
    language: 'Korean',
    population: 51,
    neighbours: ['China', 'Russia', 'Japan']
};
console.log(myCountry);
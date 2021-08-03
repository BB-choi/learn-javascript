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
console.log(descPortugal);*/

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
'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descKorea = describeCountry('Korea', 51, 'Seoul');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(descKorea);
console.log(descGermany);
console.log(descPortugal);
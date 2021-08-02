/* const country = "Republic of korea";
const continent = "Asia";
let population = 51;

// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = false;
const language = "korean";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2);
// population++;

//const finlandPopulation = 6;
//console.log(population > 6);
//const avgPopulation = 33;
//console.log(population < 33);

// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
//console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million below average.`
    );
} */

const numNeibours = Number(
    prompt('How many neighbour countries does your country have?')
);

if (numNeibours === 1)
    console.log('Only 1 border!');
else if (numNeibours > 1)
    console.log('More than 1 border');
else
    console.log('No borders');
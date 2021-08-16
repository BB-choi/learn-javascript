'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// Coding Challenge #1

// 1.
const [players1, players2] = game.players;
// const players1 = game.players[0];
// const players2 = game.players[1];
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
// const {odds} = game;
const {
  odds: { team1, x: draw, team2 },
} = game;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
// console.log(
//   (team1 > team2 && 'team2 is more likely to WIN') ||
//     (team1 < team2 && 'team1 is more likely to WIN') ||
//     (draw && 'DRAW')
// );

team1 < team2 && console.log('team1 is more likely to WIN');
team1 > team2 && console.log('team2 is more likely to WIN');


// Coding Challenge #2

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
  // console.log(player);
}

// 2.
const oddsValue = Object.values(game.odds);
// let sum = 0;
let average = 0;
for (const odd of oddsValue) {
  // sum += odd;
  average += odd;
}
// console.log(sum);
// console.log(sum / oddsValue.length);
average /= oddsValue.length;
console.log(average);

// 3.
const odds = Object.entries(game.odds);
for (const [team, odd] of odds) {
  // console.log(team, odd);
  // console.log(`Odd of ${'victory ' + game[team] || 'draw'}: ${odd}`);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS
const scorers = {};
for (const player of game.scored) {
  // if (scorers[player] && scorers[player] === 1) scorers[player] += 1;
  // else scorers[player] = 1;
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

// Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '💫 Substitution'],
  [47, '⚽ GOAL'],
  [61, '💫 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '💫 Substitution'],
  [72, '💫 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1.
// const eventsSet = new Set(gameEvents.values());
// console.log(eventsSet);
// const events = [...eventsSet];
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `"An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `"An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  // console.log(min, event);
  // console.log(
  //   `[${min <= 45 ? 'FIRST HALF' : 'SECOND HALF'}]: ${event}`
  // );
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

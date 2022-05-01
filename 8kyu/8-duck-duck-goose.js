// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Duck Duck Goose
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
https://www.codewars.com/kata/582e0e592029ea10530009ce


// INSTRUCTIONS
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name



// SOLUTION
function duckDuckGoose(players, goose) {
  goose -= 1
  let indexOfPlayer = goose % players.length 
  return players[indexOfPlayer] ? players[indexOfPlayer].name : null
}


// TEST CASES
class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1),  "a");
console.log(duckDuckGoose(players, 3),  "c");
console.log(duckDuckGoose(players, 10), "z");
console.log(duckDuckGoose(players, 20), "z");
console.log(duckDuckGoose(players, 30), "z");
console.log(duckDuckGoose(players, 18), "g");
console.log(duckDuckGoose(players, 28), "g");
console.log(duckDuckGoose(players, 12), "b");
console.log(duckDuckGoose(players, 2),  "b");
console.log(duckDuckGoose(players, 7),  "f");
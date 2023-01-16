// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Pair of gloves
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db


/* INSTRUCTIONS

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

*/

// SOLUTION
function numberOfPairs(gloves) {
  let pairs = 0
  let map = {}
  
  for(let i = 0; i < gloves.length; i++) {
    if(map[gloves[i]]) {
      map[gloves[i]]--
      pairs++
    } else {
      map[gloves[i]] = 1
    }
  }

  return pairs
}

// TEST CASES
console.log(numberOfPairs(['red','red']),1);
console.log(numberOfPairs(['red','green','blue']),0);
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']),3);
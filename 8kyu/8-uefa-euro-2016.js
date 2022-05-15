// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// UEFA EURO 2016
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57613fb1033d766171000d60


// INSTRUCTIONS
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// PREP
// P: an array of two teams, an array of their respective scores
// R: a string stating who play in order as shown in array, then who won
// E: 
  // uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
  // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
  // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
// P:

// SOLUTION
function uefaEuro2016(teams, scores){
  // compare first score to second score
  // return strings:
    // if the same, draw
        return `At match ${teams[0]} - ${teams[1]}, ${scores[0] === scores[1] ? 'teams played draw.' :
    // if first score is greater, first team won.
    // if second score is greater, second team won.
        (scores[0] > scores[1] ? teams[0] : teams[1]) + ' won!'}`
}


// TEST CASES
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");
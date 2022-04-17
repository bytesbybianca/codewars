// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Twice as old
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac


// INSTRUCTIONS
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


// SOLUTION

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld*2-dadYearsOld)
}

// // TEST CASES
console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);
console.log(twiceAsOld(22,1) , 20);
console.log(twiceAsOld(29,0) , 29);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the position!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5808e2006b65bff35500008f


// INSTRUCTIONS
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// SOLUTION
function position(letter){
  return letter.charCodeAt()-96
  //Write your own Code!
  }


// // TEST CASES
console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");
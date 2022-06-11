// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Replace With Alphabet Position
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/546f922b54af40e1e90001da/


// INSTRUCTIONS
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// SOLUTION
function alphabetPosition(text) {
  let alphabet = []
  let nums = []
  for(let i = 0; i < 26; i++){
    alphabet.push(String.fromCharCode(97 + i))
  }

  for(let i = 0; i < text.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
      if(text[i].toLowerCase() === alphabet[j]) nums.push(j + 1)
    }
  }
  return nums.join(' ')
}


// // TEST CASES
console.log(alphabetPosition("The sunset sets at twelve o' clock."), "start 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove exclamation marks
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e


// INSTRUCTIONS
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// SOLUTION

function removeExclamationMarks(s) {
    return s.split('').filter((letter) => !letter.includes('!')).join('')
  }


// // TEST CASES
console.log(removeExclamationMarks("Hello World!"), "Hello World");
console.log(removeExclamationMarks("Hel!!!lo !World!"), "Hello World");
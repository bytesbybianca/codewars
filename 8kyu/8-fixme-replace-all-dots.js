// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// FIXME: Replace all dots
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/596c6eb85b0f515834000049


/*
INSTRUCTIONS

DESCRIPTION:
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

*/


// SOLUTION
var replaceDots = function(str) {
  return str.split('').map(x => x === '.' ? '-' : x).join('')
}

// // TEST CASES
console.log(replaceDots("one.two.three"), "one-two-three");
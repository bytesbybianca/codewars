// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Parse float

*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a386117cb1f31890000039/
*/

/* INSTRUCTIONS

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

*/

/* SOLUTION

*/
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s)
}

// TEST CASES
console.log(parseF("1"), 1.0)
console.log(parseF(NaN), null)
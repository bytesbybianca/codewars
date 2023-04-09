// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Get decimal part of the given number
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/586e4c61aa0428f04e000069
*/

/* INSTRUCTIONS

Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2

*/

/* SOLUTION

*/
function getDecimal(n){
  return Math.abs(n % 1)
}

// TEST CASES
console.log(getDecimal(10), 0);
console.log(getDecimal(-1.2), 0.2);
console.log(getDecimal(4.5), 0.5);
console.log(getDecimal(-46166437.430345975), 0.430345975);
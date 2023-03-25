// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Sum of all arguments
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/540c33513b6532cd58000259
*/

/* INSTRUCTIONS

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15

*/

/* SOLUTION

*/
function sum() {
  return [...arguments].reduce((a, b) => a + b)
}

// TEST CASES
console.log( sum(1), 1 )
console.log( sum(1, 2), 3 )
console.log( sum(5, 7, 9), 21 )
console.log( sum(12, 1, 1, 1, 1), 16 )
console.log( sum(12, 1, 1, 1, 1, 1, 1), 18 )
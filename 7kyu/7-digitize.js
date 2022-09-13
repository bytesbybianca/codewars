// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Digitize
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5417423f9e2e6c2f040002ae
*/

/* INSTRUCTIONS

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]

*/

// SOLUTION
function digitize(n) {
  return n.toString().split('').map(x => Number(x))
}

// TEST CASES
console.log(digitize(123), [1,2,3])
console.log(digitize(1), [1])
console.log(digitize(0), [0])
console.log(digitize(1230), [1,2,3, 0])
console.log(digitize(8675309), [8,6,7,5,3,0,9])
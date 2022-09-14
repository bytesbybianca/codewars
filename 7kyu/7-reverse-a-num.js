// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Reverse a Number
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
*/

/* INSTRUCTIONS

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]

*/

// SOLUTION
function reverseNumber(n) {
  // split number to each character
  let reverse = Number(String(Math.abs(n)).split('')
  // reverse method
  .reverse()
  // join each character
  .join(''))
  // change it back to a number
  return n < 0 ? 0 - reverse : reverse
}

// TEST CASES
console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
console.log(reverseNumber(4321234), 4321234)
console.log(reverseNumber(5), 5)
console.log(reverseNumber(0), 0)
console.log(reverseNumber(98989898), 89898989)
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Debug Sum of Digits of a Number
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
*/

/* INSTRUCTIONS

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/

/* SOLUTION

*/
function getSumOfDigits(integer) {
  let sum = 0;
  const str = integer.toString()
  for(const char of str) {
    sum += Number(char)
  }
  return sum;
}

// TEST CASES
console.log(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
console.log(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
console.log(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
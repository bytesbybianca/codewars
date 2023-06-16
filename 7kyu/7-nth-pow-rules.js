// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Nth power rules them all!
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58aed2cafab8faca1d000e20
*/

/* INSTRUCTIONS

You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

*/
/* SOLUTION

*/
function modifiedSum(a, n) {
  return a.reduce((acc, c) => acc + (c ** n), 0) - a.reduce((acc, c) => acc + c, 0)
}

// TEST CASES
console.log(modifiedSum([1, 2, 3], 3), 30); 
console.log(modifiedSum([1, 2], 5), 30);
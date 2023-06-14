// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Be Concise III - Sum Squares
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7
*/

/* INSTRUCTIONS

Be Concise III - Sum Squares
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

*/
/* SOLUTION

*/
function sumSquares(array) {
  return array.reduce((acc, c) => acc + (c ** 2), 0)
}

// TEST CASES
console.log(sumSquares([1,2,3,4,5]), 55);
console.log(sumSquares([7,3,9,6,5]), 200);
console.log(sumSquares([11,13,15,18,2]), 843);
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]), 110);
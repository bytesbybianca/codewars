// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Halving Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d


/* INSTRUCTIONS

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

// SOLUTION
function halvingSum(n) {
  let sum = 0
  let i = n
  // loop through all halves of n
  for(i; i > 0; ) {
    // add each number to a sum
    sum += i
    i = Math.floor(i / 2)
  }
  return sum
}

// TEST CASES
console.log(halvingSum(25),47);
console.log(halvingSum(127),247);
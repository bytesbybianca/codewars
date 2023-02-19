// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Evens times last
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a1a9e5032b8b98477000004
*/

/* INSTRUCTIONS

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

*/

// SOLUTION
function evenLast(numbers) {
  if(!numbers.length) return 0
  let result = 0
  for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) result += numbers[i]
  }
  return result * numbers[numbers.length - 1]
}

// TEST CASES
console.log(evenLast([2, 3, 4, 5]), 30)
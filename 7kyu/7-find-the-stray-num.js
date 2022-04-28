// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the stray number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57f609022f4d534f05000024


// INSTRUCTIONS
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


// SOLUTION
function stray(numbers) {
  let uniqueNums = [...new Set(numbers)]
  return uniqueNums[0] == numbers[0] && uniqueNums[0] == numbers[1] ? uniqueNums[1]: uniqueNums[0]
}

// TEST CASES
console.log(stray([1, 1, 2]), 2);
console.log(stray([ 8, 1, 1, 1, 1, 1, 1 ]), 8);
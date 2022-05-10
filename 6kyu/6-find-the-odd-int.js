// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the odd int
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54da5a58ea159efa38000836


// INSTRUCTIONS
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// SOLUTION
function findOdd(A) {
  // find unique numbers
  let uniqueNums = [...new Set(A)]
  let odd
  // count how many times each unique number appears in the array
  uniqueNums.map(num => {
    A.filter(x => x == num).length % 2 !== 0 ? odd = num : null
  })
  // return the number that appears an odd number of times
  return odd
}

// // TEST CASES
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));
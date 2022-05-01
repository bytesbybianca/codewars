// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of differences in array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e


// INSTRUCTIONS
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).



// SOLUTION
function sumOfDifferences(arr) {
  console.log(arr)
  return arr.length >= 2 ? arr.sort((a,z) => z-a).map((num, i) => num - arr[i+1]).slice(0,-1).reduce((acc,c) => acc + c) : 0
}


// TEST CASES
console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
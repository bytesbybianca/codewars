// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Flatten and sort an array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f


// INSTRUCTIONS
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// PREP

// P: two-dimensional array

// R: flattened array with integers in ascending order

// E:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// P:

// SOLUTION
"use strict";

function flattenAndSort(array) {
  return array.reduce((acc, c) => acc.concat(c), []).sort((a, z) => a - z)
}



// // TEST CASES
console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
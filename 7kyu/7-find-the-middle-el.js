// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the middle element
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755


// INSTRUCTIONS
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// PREP
// P: an array of 3 numbers
// R: the index of the number that lies between the other two numbers when sorted
// E: [2, 3, 1] => 0
// P:


// SOLUTION
function gimme(triplet) {
  // sort array
  let middle = [...triplet].sort((a, z) => a-z)[1] // spread operator to not mutate original array
  // return index of middle number
  return triplet.indexOf(middle)
}


// // TEST CASES
console.log(gimme([ 2, 3, 1 ]), 0)
console.log(gimme([ 2.1, 3.2, 1.4 ]), 0)
console.log(gimme([ -38, 13, -18 ]), 2)
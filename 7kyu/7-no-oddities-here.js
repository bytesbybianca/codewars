// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// No oddities here
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce


// INSTRUCTIONS
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


// SOLUTION
function noOdds( values ){
  return values.filter(num => num % 2 === 0)
}

// // TEST CASES
console.log( noOdds( [0,1] ), [0] )
console.log( noOdds( [0,1,2,3] ), [0,2] )
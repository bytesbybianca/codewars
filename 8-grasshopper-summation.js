// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Grasshopper - Summation
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030


// INSTRUCTIONS
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


// SOLUTION

var summation = function (num) {
  let sum = 0
  for(i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

// TEST CASES
console.log(summation(1), 1)
console.log(summation(8), 36)



// CODE WARS BEST PRACTICE SOLUTION

// var summation = function (num) {
//   let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }
  
//   return result;
// }
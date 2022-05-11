// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Persistent Bugger.
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec


// INSTRUCTIONS
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


// SOLUTION
function persistence(num) {
  let numStr = num.toString()
  let count = 0
  while (numStr.length > 1) {
    numStr = numStr.split('').reduce((a, b) => a * b).toString()
    count++
  } return count
}

// // TEST CASES
console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Filter the number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55b051fac50a3292a9000025


// INSTRUCTIONS
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// SOLUTION
var FilterString = function(value) {
  let nums = '0123456789'
  return Number(value.split('').filter(x => nums.includes(x)).join(''))
}

// // TEST CASES
console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
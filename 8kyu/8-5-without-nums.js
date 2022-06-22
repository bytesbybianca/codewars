// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Valid Parentheses
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/59441520102eaa25260000bf


/* INSTRUCTIONS

Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)

*/

// SOLUTION
function unusualFive() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f']
    return array.indexOf('f')
  }

// TEST CASES
console.log(unusualFive(), 5);
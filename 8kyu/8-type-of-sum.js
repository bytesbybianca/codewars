// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Type of sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba


/* INSTRUCTIONS

Return the type of the sum of the two arguments

*/


// SOLUTION
function typeOfSum(a, b) {
  return typeof (a + b)
}

// TEST CASES
console.log(typeOfSum(12, 1), 'number');
console.log(typeOfSum('d', 1), 'string');
console.log(typeOfSum(1, 'a'), 'string');
console.log(typeOfSum('dd', ''), 'string');
console.log(typeOfSum(true, 1), 'number');
console.log(typeOfSum('s', false), 'string');
console.log(typeOfSum(null, 1), 'number');
console.log(typeOfSum('s', null), 'string');
console.log(typeOfSum(null, undefined), 'number');
console.log(typeOfSum(undefined, 're'), 'string');
console.log(typeOfSum(undefined, true), 'number');
console.log(typeOfSum(null, false), 'number');
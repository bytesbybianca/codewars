// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Stringy Strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/563b74ddd19a3ad462000054


// INSTRUCTIONS
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// SOLUTION
function stringy(size) {
  let str = '10'
  return str.repeat(size).slice(0, size)
}

// TEST CASES
console.log(typeof stringy(3), 'string',
'Make sure it\'s a string not a number (the function is called stringy after all!)');

console.log(stringy(3), '1');

for(let i = 0; i < 10; ++i){
  let parameter = (Math.random() * 50 + 1) | 0;
  console.log(stringy(parameter), `${parameter}`);
}
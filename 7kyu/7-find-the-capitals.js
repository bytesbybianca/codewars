// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the capitals
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// INSTRUCTIONS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// MY SOLUTION
var capitals = function (word) {
  let arr = []
	word.split('').map((x, i) => x === x.toUpperCase() ? arr.push(i) : false)
  return arr
};

// TEST CASES
console.log(capitals('CodEWaRs'), [0,3,4,6] );
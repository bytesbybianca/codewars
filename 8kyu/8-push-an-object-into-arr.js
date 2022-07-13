// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Push a hash/an object into array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/527b3cd0492b6b15250060af


/* INSTRUCTIONS

You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

*/

// SOLUTION
items = []
items.push({a: "b", c: "d"})

// TEST CASES
console.log(items, 'The array is still empty')
console.log(items, 1, 'The array contains too many values')
console.log(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
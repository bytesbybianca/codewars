/*
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
7kyu - Get key/value pairs as arrays
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
*/

/* URL
https://www.codewars.com/kata/515dfd2f1db09667a0000003
*/


/* INSTRUCTIONS

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

*/

// SOLUTION
function keysAndValues(data){
  let result = []
  let keys = []
  let values = []
  for(const key in data) {
    keys.push(key)
    values.push(data[key])
  }

  result.push(keys, values)
  return result
}

// TEST CASES
console.log(keysAndValues({a: 1, b: 2, c: 3}), [['a', 'b', 'c'], [1, 2, 3]]);
console.log(keysAndValues({}), [[], []]);
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}), [['1', '2', '3'], ['a', 'b', 'c']]);

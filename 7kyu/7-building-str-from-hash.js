// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Building Strings From a Hash
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2

/* INSTRUCTIONS

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

*/

// SOLUTION
function solution(pairs){
  let str = ''
 for(const key in pairs) {
  str += `${key} = ${pairs[key]},`
 }
 return str.slice(0, str.length-1)
}

// TEST CASES
console.log(solution({a: 1, b: '2'}), "a = 1,b = 2");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum Strings as Numbers
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5324945e2ece5e1f32000370


/* INSTRUCTIONS

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

P: a string a two numbers
R: the string

*/

// SOLUTION
function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString()
}

// TEST CASES
console.log(sumStrings('123','456'),'579')
console.log(sumStrings('8797','45'),'8842')
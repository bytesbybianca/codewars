// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Does my number look big in this?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5287e858c6b5a9678200083c


// INSTRUCTIONS
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

/*
P: a positive number
R: true if the number is narcissistic, else, false
E:
// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

P:

*/

// SOLUTION
function narcissistic(value) {
  // split number
  let splitNum = value.toString().split('').map(Number)
  // raise each digit by the power of the length of split number
  let multiply = splitNum.map(x => x ** splitNum.length)
  // find the sum + compare sum to value
  return multiply.reduce((acc, c) => acc+ c) === value
}

 
// // TEST CASES
console.log(narcissistic( 7 ), true, "7 is narcissistic" );
console.log(narcissistic( 371 ), true, "371 is narcissistic" );
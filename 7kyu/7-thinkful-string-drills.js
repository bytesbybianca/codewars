// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Thinkful - String Drills: Repeater
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/585a1a227cb58d8d740001c3


// INSTRUCTIONS
// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"


// SOLUTION
function repeater(string, n){
   return string.repeat(n)
 }
 

// // TEST CASES
console.log(repeater('a', 5), 'aaaaa')
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')
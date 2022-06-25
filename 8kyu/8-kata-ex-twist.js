// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Kata Example Twist
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/525c1a07bb6dda6944000031


/* INSTRUCTIONS

This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

*/

// SOLUTION
var websites = []
for(let i = 0; i < 1000; i++) {
  websites.push('codewars')
}
  
  // TEST CASES
  console.log(websites.length > 0, 'The array is still empty')
  console.log(websites.length == 1000, 'The array does not equal 1,000')
  console.log(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
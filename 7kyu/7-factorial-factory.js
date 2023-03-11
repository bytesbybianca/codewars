// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Factorial Factory
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/528e95af53dcdb40b5000171
*/

/* INSTRUCTIONS

In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null;

*/

/* SOLUTION

*/
//This function should return n!
function factorial (n) {
  if(n < 0) return null
  if(n === 0) return 1
  
  if(n === 1) {
    return n
  } else {
    return n * factorial(n - 1)
  }
  
}

// TEST CASES
// console.log(factorial(2), 2, 'Your math may be incorrect');
console.log(factorial(5), 120, 'Your math may be incorrect');
// console.log(factorial(-1), null, "Don't forget to check for negatives!");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Factorial
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a049e253ba33ac5e000212
*/

/* INSTRUCTIONS

Your task is to write function factorial.

*/

// SOLUTION
function factorial(n){
  let result = 1
  for(let i = n; i >= 1; i--) {
    result *= i
  }
  return result
}

// TEST CASES
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);
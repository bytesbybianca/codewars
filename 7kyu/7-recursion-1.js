// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Recursion #1 - Factorial
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5694cb0ec554589633000036
*/

/* INSTRUCTIONS

 Do you know recursion?
This is a kata series that you can only solve using recursion.
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.

*/

/* SOLUTION

*/
const factorial = n => {
  if(n === 0) return 1
  if(n === 1) return n
  return n * factorial(n - 1)
};

// TEST CASES
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
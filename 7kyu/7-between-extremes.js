// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Between Extremes
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56d19b2ac05aed1a20000430
*/

/* INSTRUCTIONS

Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

*/
/* SOLUTION

*/
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers)
}

// TEST CASES
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);
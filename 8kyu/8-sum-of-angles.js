// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Sum of angles
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a03b3f6a1c9040084001765
*/

/* INSTRUCTIONS

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

*/

// SOLUTION
function angle(n) {
  return 180 * (n-2)
}

// TEST CASES
console.log(angle(3), 180);
console.log(angle(4), 360);
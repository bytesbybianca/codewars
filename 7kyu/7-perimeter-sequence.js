// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Perimeter sequence
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/589519d1f0902e01af000054
*/

/* INSTRUCTIONS

Perimeter sequence
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

*/

/* SOLUTION

*/
function perimeterSequence(a,n) {
  return a * n * 4
}

// TEST CASES
console.log(perimeterSequence(1,3), 12)
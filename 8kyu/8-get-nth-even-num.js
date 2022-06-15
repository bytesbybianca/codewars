// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Get Nth Even Number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed


/* INSTRUCTIONS

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.

*/

// SOLUTION
function nthEven(n){
  return n * 2 - 2
}

// TEST CASES
console.log(nthEven(1), 0);
console.log(nthEven(2), 2);
console.log(nthEven(3), 4);

console.log(nthEven(100), 198);
console.log(nthEven(1298734), 2597466);
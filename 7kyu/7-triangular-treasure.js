// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Triangular Treasure
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/525e5a1cb735154b320002c8


/* INSTRUCTIONS

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0

*/


// SOLUTION
function triangular( n ) {
  if(n <= 0) {
    return 0
  }

  let triangle = 0
  for(let i = n; i >= 1; i--) {
    triangle += i
  }

  return triangle
}

// TEST CASES
console.log( triangular(2), 3 )
console.log( triangular(4), 10 )
console.log( triangular(-454), 0 )
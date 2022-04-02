// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum without highest and lowest number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/576b93db1129fcf2200001e6


// INSTRUCTIONS
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


// SOLUTION

function sumArray(array) {
  if (array == null || array.length < 3) {
    return 0
  }
  return array
    .sort((a, b) => a-b)
    .reduce((acc, c) => acc + c, 0) - (array[0] + array[array.length-1])
}


// TEST CASES
console.log( sumArray(null)                     , 0 );
console.log( sumArray([ ])                      , 0 );
console.log( sumArray([ 3 ])                    , 0 );
console.log( sumArray([ 3, 5 ])                 , 0 );
console.log( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
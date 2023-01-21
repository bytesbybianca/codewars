// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Length of missing array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611


/* INSTRUCTIONS

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/

// SOLUTION
function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays || !arrayOfArrays.length) return 0

  let lengths = []
  for(let i = 0; i < arrayOfArrays.length; i++) {
    if(!arrayOfArrays[i] || !arrayOfArrays[i].length) return 0
    lengths.push(arrayOfArrays[i].length)
  }
  
  let sortedLengths = lengths.sort((a, b) => a - b)

  for(let i = 0; i <= sortedLengths.length; i++) {
    if(sortedLengths[i + 1] - sortedLengths[i] !== 1) {
      return sortedLengths[i] + 1
    }
  }
}


// TEST CASES
console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
console.log(getLengthOfMissingArray([ ]), 0);
console.log(getLengthOfMissingArray([
  [ 3, 0, 0 ],
  [
    4, 3, 2, 2, 1, 3,
    0, 4, 1, 4, 1, 1,
    0
  ],
  [
    1, 2, 2, 1, 2,
    4, 4, 1, 4, 0,
    1
  ],
  [ 0, 2, 3, 1, 3 ],
  [ 0, 4, 0, 0, 3, 4 ],
  [
    4, 4, 1, 1,
    2, 3, 4, 3
  ],
  [
    2, 0, 0, 4, 2,
    3, 0, 3, 1
  ],
  [
    4, 4, 0, 2, 4, 2,
    4, 2, 4, 2, 4, 2,
    2, 0
  ],
  [
    4, 0, 0, 4,
    4, 4, 2
  ],
  [
    4, 2, 3, 3, 2,
    2, 4, 0, 1, 4
  ],
  [
    1, 2, 4, 2, 0,
    1, 0, 4, 0, 3,
    4, 0
  ]
]), 4);
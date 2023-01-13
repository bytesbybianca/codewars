// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find all pairs
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3


/* INSTRUCTIONS

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

*/

// SOLUTION
function duplicates(array){
  let map = {}
  let pairs = 0

  for(let i = 0; i < array.length; i++) {
    if(map[array[i]]) {
      map[array[i]]--
      pairs++
    } else {
      map[array[i]] = 1
    }
  }

  return pairs
}

// TEST CASES
console.log( duplicates([1, 2, 5, 6, 5, 2]),2 );
console.log( duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]),4 );
console.log( duplicates([0, 0, 0, 0, 0, 0, 0]),3 );
console.log( duplicates([1000, 1000]),1 );
console.log( duplicates([]),0 );
console.log( duplicates([54]),0 );
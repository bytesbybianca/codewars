// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Maximum subarray sum
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
*/

/* INSTRUCTIONS

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

// SOLUTION
var maxSequence = function(arr){
  // return the max sum of a contiguous subsequence
  let max = 0
    // loop through array
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j <= arr.length; j++) {
        let currentArr = arr.slice(i, j)
        let currentSum = currentArr.reduce((a, b) => a + b, 0)
        if(currentSum > max) {
          // replace max variable if greater
          max = currentSum
        }
      }
    }
  return max
}

// TEST CASES
// console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]), 155);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
How many are smaller than me?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56a1c074f87bc2201200002e
*/

/* INSTRUCTIONS

Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

*/

// SOLUTION
function smaller(nums) {
  let result = []
  for(let i = 0; i < nums.length; i++) {
    let rightOfNum = nums.slice(i + 1)
    result.push(rightOfNum.filter(num => nums[i] > num).length)
  }
  return result
}

// TEST CASES
console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
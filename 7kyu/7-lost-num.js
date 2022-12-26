// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Lost number in number sequence
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/595aa94353e43a8746000120
*/

/* INSTRUCTIONS

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

*/

// SOLUTION
function findDeletedNumber(arr, mixArr) {
  let map = {}

  for(let i = 0; i < arr.length; i++) {
    map[arr[i]] = 1
  }

  for(let i = 0; i < mixArr.length; i++) {
    if(map[mixArr[i]]) {
      map[mixArr[i]]--
    }
  }

  for(const num in map) {
    if(map[num] === 1) {
      return Number(num)
    }
  }

  return 0
}

// TEST CASES
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
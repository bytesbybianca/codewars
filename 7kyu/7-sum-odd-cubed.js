// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Sum of Odd Cubed Numbers
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/580dda86c40fa6c45f00028a
*/

/* INSTRUCTIONS

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

// SOLUTION
function cubeOdd(arr) {
  let sum = 0

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') {
      return undefined
    } else {
      if(arr[i] ** 3 % 2 !== 0) {
        sum += arr[i] **= 3
      }
    }
  }
  
  return sum
}

// TEST CASES
console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);
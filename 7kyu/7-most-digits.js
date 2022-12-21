// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Most digits
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58daa7617332e59593000006
*/

/* INSTRUCTIONS

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

// SOLUTION
function findLongest(array){
  let longestDigit, longestDigitLen = 0

  for(let i = 0; i < array.length; i++) {
    if(String(array[i]).length > longestDigitLen) {
      longestDigit = array[i]
      longestDigitLen = String(array[i]).length
    }
  }

  return longestDigit
}

// TEST CASES
console.log(findLongest([1, 10, 100]), 100)
console.log(findLongest([9000, 8, 800]), 9000)
console.log(findLongest([8, 900, 500]), 900)
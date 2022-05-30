// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of Digits / Digital Root
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/541c8630095125aba6000c00


// INSTRUCTIONS
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


/*

P: a non-negative integer
R: the digital root - recursive sum of all the digits in the number
E:

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/


// SOLUTION
function digital_root(n) {
  let number = n
  // define split array = split array each number
  let splitArr = Array.from(number.toString()).map(Number)
  // loop through split array until array length == 1
  while(splitArr.length > 1) {
    // reduce split array
    number = splitArr.reduce((acc, c) => acc + c, 0)
    splitArr = Array.from(number.toString()).map(Number)
    // reassign array to equal sum
  }
  return number
}

// // TEST CASES
console.log( digital_root(16), 7 )
console.log( digital_root(942), 6 )
console.log( digital_root(493193), 2 )
console.log( digital_root(456), 6 )
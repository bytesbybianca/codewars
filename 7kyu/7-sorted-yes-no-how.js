// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sorted? yes? no? how?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/580a4734d6df748060000045


/* INSTRUCTIONS

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

// SOLUTION
function isSortedAndHow(array) {
  let asc = [...array].sort((a,z,) => a-z)
  let desc = [...array].sort((a,z,) => z-a)
  let finalArray = []
  for(let i = 0; i < array.length; i++) {
      if(asc[i] === array[i]) {
        finalArray.push(array[i])
        if(finalArray.length === array.length) {
          return 'yes, ascending'
        }
      } else if(asc[i] !== array[i]){
          finalArray = []

          for(let j = 0; j < array.length; j++) {
            if(desc[j] === array[j]) {
              finalArray.push(array[j])
              if(finalArray.length === array.length) {
                return 'yes, descending'
              }
            } else {
              return 'no'
            }
          }
      }
  }
}

// TEST CASES
console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
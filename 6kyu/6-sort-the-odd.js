// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sort the odd
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d


/* INSTRUCTIONS

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

P: an array of numbers
R: return an array with odd nums in ascending order and leaving even nums at original position

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

// SOLUTION
function sortArray(array) {
    let oddNums = []
    let placeholderArr = []
    // loop through array. if num is odd, push to another array and push a placeholder to another array
    array.map(num => {
        if(num % 2 !== 0) {
            oddNums.push(num)
            placeholderArr.push('hi')
        } else {
            placeholderArr.push(num)
        }
    })

    // sort odd num array
    oddNums = oddNums.sort((a, b) => a-b)
    // loop to replace placeholder with sorted odd numbers
    let oddIndex = 0

    for(let el = 0; el < placeholderArr.length; el++){
        while(placeholderArr[el] === 'hi') {
            if(placeholderArr[el] === 'hi') {
                // console.log(oddNums[oddIndex])
                placeholderArr[el] = oddNums[oddIndex]
                oddIndex++
            }
        }
    }
    return placeholderArr
  }
  
  // TEST CASES
  console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
  console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
  console.log(sortArray([ -11, -21, -32, -40, -6, -27, 0, -29, -8, -3, -31, -34, -35, -39, -16, -45, -46, -49, -12, -4, -5, 11, 23, 20, 27, -6, 33 ]), [ -49, -45, -32, -40, -6, -39, 0, -35, -8, -31, -29, -34, -27, -21, -16, -11, -46, -5, -12, -4, -3, 11, 23, 20, 27, -6, 33 ]);
  console.log(sortArray([]),[]);
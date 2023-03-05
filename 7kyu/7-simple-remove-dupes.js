// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Simple remove duplicates
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5ba38ba180824a86850000f7
*/

/* INSTRUCTIONS

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

*/

/* SOLUTION

*/
function solve(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    let remainingArr = arr.slice(i + 1)
    if(!remainingArr.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

// TEST CASES
console.log(solve([3,4,4,3,6,3]),[4,6,3]);
console.log(solve([1,2,1,2,1,2,3]),[1,2,3]);
console.log(solve([1,2,3,4]),[1,2,3,4]);
console.log(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
console.log(solve([1,2,1,2,1,1,3]),[2,1,3]);
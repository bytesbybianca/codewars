// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Computer problem series #1: Fill the Hard Disk Drive
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
*/

/* INSTRUCTIONS

Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.

*/
/* SOLUTION

*/
function save(sizes, hd) {
  let count = 0
  
  for(let i = 0; i < sizes.length; i++) {
    let currentSize = sizes.slice(0, i + 1).reduce((acc, c) => acc + c, 0)
    if(currentSize === hd) {
      count++
      while(sizes[i + 1] === 0) {
        count++
        i++
      }
      return count
    } else if(currentSize > hd) {
      return count
    }
    count++
  }
  
  return count
}

// TEST CASES
console.log(save([4, 4, 4, 3, 3], 12), 3)
console.log(save([4, 4, 4, 3, 3], 11), 2)
console.log(save([4, 8, 15, 16, 23, 42], 108), 6)
console.log(save([13], 13), 1)
console.log(save([1, 2, 3, 4], 250), 4)
console.log(save([100], 500), 1)
console.log(save([11, 13, 15, 17, 19], 8), 0)
console.log(save([45], 12), 0)
console.log(save([0, 15, 10, 9, 14, 7, 0, 18, 13, 18, 15], 55), 7)
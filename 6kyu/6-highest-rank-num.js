// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Highest Rank Number in an Array
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
*/

/* INSTRUCTIONS

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

// SOLUTION
function highestRank(arr){
  let array = arr
  let frequency = 0
  let num = []
  for(let i = 0; i < array.length; i++) {
    let filtered = array.filter(x => x === array[i])
    if(filtered.length > frequency) {
      frequency = filtered.length
      num = [array[i]]
    } else if(!num.includes(array[i]) && filtered.length === frequency) {
      frequency = filtered.length
      num.push(array[i])
    }
  }
  return Math.max(...num)
}

// TEST CASES
var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);
arr = [12, 10, 8, 13, 12, 7, 6, 4, 10, 12, 13, 13];
console.log(highestRank(arr), 13);
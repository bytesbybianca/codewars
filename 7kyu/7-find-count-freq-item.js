// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Find Count of Most Frequent Item in an Array
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56582133c932d8239900002e
*/

/* INSTRUCTIONS

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

*/

/* SOLUTION

*/
function mostFrequentItemCount(collection) {
  let map = {}
  
  for(const num in collection) {
    if(map[collection[num]]) {
      map[collection[num]]++
    } else {
      map[collection[num]] = 1
    }
  }

  return !collection.length ? 0 : Math.max(...Object.values(map))
}

// TEST CASES
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
console.log(mostFrequentItemCount([]), 0);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Enumerable Magic #3 - Does My List Include This?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/545991b4cbae2a5fda000158
*/

/* INSTRUCTIONS

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

// SOLUTION
function include(arr, item){
  return arr.includes(item)
}

// TEST CASES
console.log(include([1,2,3,4], 3), true )
console.log(include([1,2,4,5], 3), false)
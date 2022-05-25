// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Enumerable Magic #1 - True for All?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54598d1fcbae2ae05200112c


// INSTRUCTIONS
// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// P: an array and a function
// R: if all elements in the array returns true, return true, else, false
// E:
  // all((1, 2, 3, 4, 5), greater_than_9) -> false
  // all((1, 2, 3, 4, 5), less_than_9)    -> True
// P:


// SOLUTION
function all( arr, fun ){
  // loop through all the elements and pass through function
  let loop = arr.map(x => fun(x))
  return loop.includes(false) || loop.includes(0) ? false : true
}

// // TEST CASES
console.log(all([1,2,3,4,5], function(v){return v<9}), true)
console.log(all([1,2,3,4,5], function(v){return v>9}), false)
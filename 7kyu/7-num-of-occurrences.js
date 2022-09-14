// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Number Of Occurrences
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/52829c5fe08baf7edc00122b
*/

/* INSTRUCTIONS

Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

*/

// SOLUTION
Array.prototype.numberOfOccurrences = function(num) {
  return this.filter(x => x === num).length
}

// TEST CASES
var arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);
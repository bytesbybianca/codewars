// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Are the numbers in order?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56b7f2f3f18876033f000307


// INSTRUCTIONS
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.



// PREP
// P: array of integers
// R: state if numbers are in ascending order
  // If in ascending order:
    // 'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
  // If in descending order:
    // 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
  // If not in any order:
    // 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
// E: 
  // inAscOrder([1,2,4,7,19]); // returns true
  // inAscOrder([1,2,3,4,5]); // returns true
  // inAscOrder([1,6,10,18,2,4,20]); // returns false
  // inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
  // N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
// P:

// SOLUTION
function inAscOrder(arr) {
  let original = [...arr].toString()
  let ascOrder = [...arr].sort((a,z) => a-z).toString()

  return original == ascOrder
}


// TEST CASES
console.log(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
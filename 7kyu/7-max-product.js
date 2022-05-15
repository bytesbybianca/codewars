// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Maximum Product
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a4138acf28b82aa43000117


// INSTRUCTIONS
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// PREP
// P: an array of at least 2 positives, negatives, zeroes
// R: max product from 2 adjacent numbers in array
// E:
  // adjacentElementsProduct([1, 2, 3]); ==> return 6
  // Explanation:
  // The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
  // adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
  // Explanation:
  // Max product obtained from multiplying 5 * 10 = 50 .

  // adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
  // Explanation:
  // The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
// P:

// SOLUTION
function adjacentElementsProduct(array) {
  // define variable new array
  let newArr = []
  // Loop through each number
  // Multiply number by number at index + 1
  // Push products into new array
  array.map((num, i) => !isNaN(num * array[i+1]) ? newArr.push(num * array[i+1]) : num)
  // Return max of new array
  return Math.max(...newArr)
}


// TEST CASES
console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
console.log(adjacentElementsProduct([1, 2, 3, 0]), 6);
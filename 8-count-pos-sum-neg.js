// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Count of positives / sum of negatives
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044


// INSTRUCTIONS
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// SOLUTION

function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    let newArray = []
    if(input === null) {
      return []
    } else if(input && input.every((num) => num === 0)) {
        return []
    } else if(input && input.length === 0) {
      return []
    } else {
    input && input.map((num) => num > 0 ? (count += 1) : (sum += num))
    }
    newArray = [count, sum]
    return newArray
}



// // TEST CASES
let actual = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
let expected = [10, -65];
console.log(actual, expected);

actual = countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
expected = [8, -50];    
console.log(actual, expected);

actual = countPositivesSumNegatives([0, 0]);
expected = [];    
console.log(actual, expected);

actual = countPositivesSumNegatives([]);
expected = [];    
console.log(actual, expected);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Printing Array elements with Comma delimiters
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56e2f59fb2ed128081001328


// INSTRUCTIONS
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"


// SOLUTION
function printArray(array){
  return array.toString()
}

// // TEST CASES
console.log( printArray( [2,4,5,2] ), "2,4,5,2" )
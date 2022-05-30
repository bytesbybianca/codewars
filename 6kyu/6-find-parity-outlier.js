// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find The Parity Outlier
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc


// INSTRUCTIONS
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

/*
P: an array of at least 3 numbers, containing all odd or even integets except one

R: return the one outlier integer

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/


// SOLUTION
function findOutlier(integers){
  // filter array for even numbers
  let filtered = integers.filter(x => x % 2 === 0)
  // check length
    // if length = 1, return that number
  return filtered.length === 1 ? filtered[0] :
    // if length > 1, compare filtered array to intergers array and return the number that is not included
    integers.filter(x => !filtered.includes(x))[0]
}

// // TEST CASES
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)
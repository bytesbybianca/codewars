// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sort Numbers
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003


// INSTRUCTIONS
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


// SOLUTION

function solution(nums){
  return nums ? nums.sort((a, b) => a - b) : []
}

// // TEST CASES
console.log(solution([1,2,3,10,5]), [1,2,3,5,10])
console.log(solution(null), [])
console.log(solution([]), [])
console.log(solution([20, 2, 10]), [2,10,20])
console.log(solution([2, 20, 10]), [2,10,20])
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Multiples of 3 or 5
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/514b92a657cdc65150000006


// INSTRUCTIONS
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// SOLUTION
function solution(number){
  let arr = []
  // loop from 1 to number
  for(i = 1; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) arr.push(i)
  }
  // find the multiples of 3 or 5
  // reduce them to find sum
  // if positive, returm sum, if negative, return 0
  return arr.reduce((acc, c) => acc + c, 0)
}

// // TEST CASES
console.log(solution(10), 23);
console.log(solution(-3), 0);
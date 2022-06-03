// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Two Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52c31f8e6605bcc646000082


// INSTRUCTIONS
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

/*
P: an array of numbers, target number
R: the indices of the numbers in the array that sum up to the target number
E:
[1, 2, 3] 4 === (0, 2)

*/


// SOLUTION
function twoSum(numbers, target) {
   let pair
   let sum
   // loop through array
   for(let i = 0; i < numbers.length; i++) {
      if(sum != target) {
         // find all sums of all pairs of integers
         // store integers in another array
         if(i == numbers.length-1) {
            sum = numbers[0] + numbers[i]
            pair = [numbers[0], numbers[i]]
         } else {
            sum = numbers[i] + numbers[i+1]
            pair = [numbers[i], numbers[i+1]]
         }
      }
   }
   // find the indices of the integers in array
   return [numbers.indexOf(pair[0]), numbers.lastIndexOf(pair[1])]
 }
 

// // TEST CASES
console.log(twoSum([1,2,3], 4), [0,2]);
console.log(twoSum([1234,5678,9012], 14690), [1,2]);
console.log(twoSum([2,2,3], 4), [0,1]);
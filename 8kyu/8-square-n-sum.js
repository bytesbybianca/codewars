// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Square(n) Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/515e271a311df0350d00000f


// INSTRUCTIONS
// Complete the square sum function so that it squares each number passed into it and then sums the results together.


// SOLUTION

function squareSum(numbers){
  let sum = 0
  for(i = 0; i <= numbers.length-1; i++) {
    numbers[i] *= numbers[i]
    sum += numbers[i]
  } return sum
}

// TEST CASES
console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([]), 0)



// CODE WARS BEST PRACTICE SOLUTION

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }
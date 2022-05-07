// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// The highest profit wins!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/559590633066759614000063


// INSTRUCTIONS
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.


// SOLUTION
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

// // TEST CASES
const testCases = [
  [[1, 2, 3, 4, 5], [1, 5]],
  [[2334454, 5], [5, 2334454]],
  [[5], [5, 5]]]

for(const [input, expected] of testCases) {
  console.log(minMax(input), expected);
}
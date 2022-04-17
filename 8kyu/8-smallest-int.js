// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the smallest integer in the array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2


// INSTRUCTIONS
// Given an array of integers your solution should find the smallest integer.


// MY SOLUTION

class SmallestIntegerFinder {
  findSmallestInt(args) {
      args.sort((a, b) => a - b)
      return args[0]
  }
}


// TEST CASES
console.log(findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
console.log(findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
console.log(findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
console.log(findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
console.log(findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');


// CODE WARS SOLUTION

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }
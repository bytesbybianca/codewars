// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Don't give me five!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5813d19765d81c592200001a


// INSTRUCTIONS
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12


// SOLUTION
function dontGiveMeFive(start, end) {
  let arr = []
  let count = 0
  for(let i = start; i <= end; i++) {
    i != 5 ? arr.push(i) : i
  } 
  arr.map(num => num.toString().includes('5') ? null : count++)
  return count
}

// TEST CASES
console.log(dontGiveMeFive(1,9), 8);
console.log(dontGiveMeFive(4,17), 12);
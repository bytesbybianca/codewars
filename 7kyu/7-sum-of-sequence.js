// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of a sequence
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/586f6741c66d18c22800010a


// INSTRUCTIONS
// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0


// SOLUTION
const sequenceSum = (begin, end, step) => {
  let sum = 0
  if(begin > end) {
    return 0
  } else {
    for(i = begin; i <= end; i + step) {
      sum += i
      i+=step
    }
  }
  return sum
};

// TEST CASES
console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)  
console.log(sequenceSum(7, 5, 3), 5)  
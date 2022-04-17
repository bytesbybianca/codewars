// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reversed sequence
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d


// INSTRUCTIONS
// Build a function that returns an array of integers from n to 1 where n>0.


// SOLUTION

const reverseSeq = n => {
  let newArray = []
  for(n; n > 0; n--) {
    newArray.push(n)
  }
  return newArray
};



// TEST CASES
console.log(reverseSeq(5))
console.log(reverseSeq(7))
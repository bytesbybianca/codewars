// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the first non-consecutive number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144


// INSTRUCTIONS
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// SOLUTION

function firstNonConsecutive(array) {
  if(array === null) {
    return null
  }
  for(i = 0; i < array.length; i++) {
    if(array[i] - array[i-1] > 1) {
      return array[i]
    }
  } return null
}


// TEST CASES
console.log( firstNonConsecutive([1,2,3,4,6,7,8])  , 6 );
console.log( firstNonConsecutive([-2,-1,0,1,2,3,4,5,6,7])  , null );
console.log( firstNonConsecutive(null)  , null );
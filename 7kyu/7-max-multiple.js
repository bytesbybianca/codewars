// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Maximum Multiple
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5aba780a6a176b029800041c


// INSTRUCTIONS
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .


// SOLUTION
function maxMultiple(divisor, bound){
  let n
  for(i = divisor; i <= bound; i += divisor) {
    n = i
  }
  return n
}

// // TEST CASES
console.log(maxMultiple(2,7),6);
console.log(maxMultiple(3,10),9);
console.log(maxMultiple(7,17),14);
console.log(maxMultiple(10,50),50);
console.log(maxMultiple(37,200),185);
console.log(maxMultiple(7,100),98);
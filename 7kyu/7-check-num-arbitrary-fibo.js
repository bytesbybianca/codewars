// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Check if a number is a part of an arbitrary fibonacci sequence
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56dc83840a10fee472000ca1


/* INSTRUCTIONS

You will be given a function, isFibo, which will take three arguments: a, b and f.

a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

Good luck, muh fellow coding warrior.

*/

// SOLUTION
function isFibo(a,b,f) {
  let sequence = [a, b]
  let sum = 0
  for(let i = 1; sum <= f; i++) {
    sum = sequence[i] + sequence[i-1]
    sequence.push(sum)
  }
  return sequence.includes(f)
}

// TEST CASES
console.log(isFibo(0,1,2),true);
console.log(isFibo(1,4,10),false);
console.log(isFibo(4,5,23),true);
console.log(isFibo(100,101,301),false);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// N-th Fibonacci
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/522551eee9abb932420004a0


/* INSTRUCTIONS

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

*/

// SOLUTION
function nthFibo(n) {
  if(!Number(n)) return NaN
  let sequence = [0, 1]
  let sum = 0
  for(let i = 1; i <= n; i++) {
    sum = sequence[i] + sequence[i-1]
    sequence.push(sum)
  }
  return sequence[n-1]
}

// TEST CASES
console.log(nthFibo(1), 0,"1-st Fibo");
console.log(nthFibo(2), 1,"2-nd Fibo");
console.log(nthFibo(3), 1,"3-rd Fibo");
console.log(nthFibo(4), 2,"4-th Fibo");
console.log(nthFibo(9), 21,"9-th Fibo");
console.log(nthFibo(), NaN);
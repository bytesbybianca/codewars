// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Even Fibonacci Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55688b4e725f41d1e9000065/javascript


/* INSTRUCTIONS

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

*/

// SOLUTION
function fibonacci(max) {
  let sequence = [0, 1]
  let sum = 0
  for(let i = 1; sum < max; i++) {
    sum = sequence[i] + sequence[i-1]
    sequence.push(sum)
  }
  return sequence.filter(x => x % 2 === 0 && x < max).reduce((acc, c) => acc + c, 0)
}

// TEST CASES
console.log(fibonacci(2147483647), 1485607536);
console.log(fibonacci(1000000000), 350704366);
console.log(fibonacci(100000000), 82790070);
console.log(fibonacci(1000000), 1089154);
console.log(fibonacci(1000), 798);
console.log(fibonacci(100), 44);
console.log(fibonacci(5), 2);
console.log(fibonacci(8), 2);
console.log(fibonacci(10), 10);
console.log(fibonacci(1), 0);
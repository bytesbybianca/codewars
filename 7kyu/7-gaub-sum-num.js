// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Gauß needs help! (Sums of a lot of numbers).
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/54df2067ecaa226eca000229
*/

/* INSTRUCTIONS

Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 

It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

*/

/* SOLUTION

*/

function f(n){
  let sum = 0

  if(n !== parseInt(n) || n <= 0) return false

    while(n >= 0) {
      sum += n
      n--
    }
    return sum
  };

// TEST CASES
console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false, "n must be a number");
console.log(f(), false, "n must be a value");
console.log(f(3.14), false, "n must be an integer");
console.log(f(0), false, "a value of n greater than 0 is required");
console.log(f(-10), false, "a positive value of n is required");
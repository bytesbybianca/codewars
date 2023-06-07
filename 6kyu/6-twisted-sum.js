// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Twisted Sum
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
*/

/* INSTRUCTIONS

Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

*/
/* SOLUTION

*/
function twistedSum(n) {
  return [...Array(n+1).keys()].slice(1).join('').split('').reduce((acc, c) => acc + Number(c), 0)
}

// TEST CASES
console.log(twistedSum(3), 6);
console.log(twistedSum(10), 46);
console.log(twistedSum(11), 48);
console.log(twistedSum(12), 51);
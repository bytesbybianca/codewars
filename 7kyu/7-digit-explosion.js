// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Digits explosion
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/585b1fafe08bae9988000314
*/

/* INSTRUCTIONS

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

*/

// SOLUTION
function explode(s) {
  let result = ''
  for(let num of s) {
    result += num.repeat(num)
  }
  return result
}

// TEST CASES
const tests = [
  ["312", "333122"],
  ["102269", "12222666666999999999"],
  ["0", ""],
  ["000", ""],
  ["123", "122333"]
];

for(const [input, expected] of tests) {
  console.log(explode(input), expected);
}
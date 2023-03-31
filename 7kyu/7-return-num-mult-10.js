// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Return the closest number multiple of 10
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58249d08b81f70a2fc0001a4
*/

/* INSTRUCTIONS

Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40

*/

/* SOLUTION

*/
const closestMultiple10 = num => {
  let tens = Math.floor(num / 10)
  if (num % 10 >= 5) {
    tens++
  }

  return tens * 10
};

// TEST CASES
for (let i = 10; i <= 14; ++i) {
  console.log(closestMultiple10(i), 10);
}
for (let i = 15; i <= 20; ++i) {
  console.log(closestMultiple10(i), 20);
}
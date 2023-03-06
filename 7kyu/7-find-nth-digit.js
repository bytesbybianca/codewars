// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Find the nth Digit of a Number
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/577b9960df78c19bca00007e
*/

/* INSTRUCTIONS

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/

/* SOLUTION

*/
var findDigit = function(num, nth){
  let numStr = num.toString()
  if(nth > Math.abs(num).toString().length) return 0
  if(nth <= 0) return -1

  return Number(numStr[numStr.length - nth])
}

// TEST CASES
console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);
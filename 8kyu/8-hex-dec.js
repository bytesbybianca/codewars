// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Hex to Decimal
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a4d500e298a7952100035d/
*/

/* INSTRUCTIONS

Complete the function which converts hex number (given as a string) to a decimal number.

*/

/* SOLUTION

*/
function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

// TEST CASES
console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);
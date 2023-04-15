// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Bin to Decimal
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
*/

/* INSTRUCTIONS

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

/* SOLUTION

*/
function binToDec(bin){
  return parseInt(bin, 2)
}

// TEST CASES
[ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => console.log( binToDec(inp), exp ) )
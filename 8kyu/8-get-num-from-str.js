// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Get number from string
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a37f3cbb99449513000cd8/
*/

/* INSTRUCTIONS

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/

// SOLUTION
function getNumberFromString(s) {
  let numberString = ''
  
  for(const char of s) {
    if(char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      numberString += char
    }
  }
    
  return Number(numberString)
}

// TEST CASES         
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Alternate case
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57a62154cf1fa5b25200031e
*/

/* INSTRUCTIONS

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

*/

/* SOLUTION

*/
function alternateCase(s) {
  let result = ''
  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toLowerCase()) {
      result += s[i].toUpperCase()
    } else {
      result += s[i].toLowerCase()
    }
  }

  return result
}

// TEST CASES
console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD"); 
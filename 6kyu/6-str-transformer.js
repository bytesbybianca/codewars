// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
String transformer
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5878520d52628a092f0002d0/
*/

/* INSTRUCTIONS

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

*/

// SOLUTION
function stringTransformer(str) {
  let newStr = ''

  for(let char of str) {
      if(char === char.toUpperCase()) {
          newStr += char.toLowerCase()
      } else if(char === char.toLowerCase()) {
          newStr += char.toUpperCase()
      }
  }

  return newStr.split(' ').reverse().join(' ')
}

// TEST CASES
console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
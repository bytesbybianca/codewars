// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Spacify
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57f8ee485cae443c4d000127
*/

/* INSTRUCTIONS

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

*/

// SOLUTION
function spacify(str) {
  return str.split('').join(' ')
}

// TEST CASES
console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');
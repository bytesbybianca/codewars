// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Grasshopper - Combine strings
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55f73f66d160f1f1db000059
*/

/* INSTRUCTIONS

Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

*/

// SOLUTION
function combineNames(first, last) {
  return first + ' ' + last
}

// TEST CASES
console.log(combineNames('James', 'Stevens'), 'James Stevens')
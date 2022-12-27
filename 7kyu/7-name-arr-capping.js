// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Name Array Capping
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5356ad2cbb858025d800111d
*/

/* INSTRUCTIONS

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

*/

// SOLUTION
function capMe(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
}

// TEST CASES
console.log(capMe(['jo', 'nelson', 'jurie']))     // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']
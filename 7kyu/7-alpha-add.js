// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Alphabetical Addition
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5d50e3914861a500121e1958
*/

/* INSTRUCTIONS

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'

*/

/* SOLUTION

*/
function addLetters(...letters) {
  // if no letters, return 'z'
  if(!letters.length) return 'z'
  // add letters and convert to code
  let num = letters.reduce((acc, c) => acc + c.charCodeAt()-96, 0) + 96
  // if overflowing, start count back at first lowercase code
  while(num > 122) num -= 26
  // return letter
  return String.fromCharCode(num)
}

// TEST CASES
const tests = [
  [['a', 'b', 'c'], 'f'],
  [['z'], 'z'],
  [['a', 'b'], 'c'],
  [['c'], 'c'],
  [['z', 'a'], 'a'],
  [['y', 'c', 'b'], 'd'],
  [[], 'z'],
  [[ 'b', 'd', 'u', 'z', 'e' ], 'f']
];

tests.forEach(test => {
  console.log(addLetters(...test[0]), test[1]);
})
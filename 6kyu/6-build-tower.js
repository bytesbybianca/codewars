// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Build Tower
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/576757b1df89ecf5bd00073b
*/

/* INSTRUCTIONS

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

// SOLUTION
function towerBuilder(nFloors) {
  let tower = []
  let starCount = nFloors + (nFloors - 1)
  let padding = ''

  for(let i = 1; i <= nFloors; i++) {
    tower.unshift(padding + '*'.repeat(starCount) + padding)
    starCount -= 2
    padding += ' '
  }

  return tower
}

// TEST CASES         
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);
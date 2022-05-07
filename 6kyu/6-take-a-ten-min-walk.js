// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Take a Ten Minutes Walk
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54da539698b8a2ad76000228/


// INSTRUCTIONS
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// SOLUTION
function isValidWalk(walk) {
  let x = 0, y = 0 // x will represent N and S directions. y will represent E and W directions
  walk.map(direction => direction == 'n' ? x++ :
  direction == 's' ? x-- :
  direction == 'e' ? y++ : y--)
  return walk.length == 10 && x == 0 && y == 0 // walk should be exactly ten minutes and return to starting point
}


// // TEST CASES
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
console.log(isValidWalk([ 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e' ]), 'should return false');
console.log(isValidWalk([ 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e' ]), 'should return false');
console.log(isValidWalk([ 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w' ]), 'should return false');
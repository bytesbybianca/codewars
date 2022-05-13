// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// For Twins: 2. Math operations
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/59c287b16bddd291c700009a/


// INSTRUCTIONS
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

// Example 1:
// radius = 1
// bottle_length = 10
// rim_length = 2

// volume = 16
// Example 2:
// radius = 5
// bottle_length = 30
// rim_length = 7

// volume = 1150

// SOLUTION
function iceBrickVolume(radius, bottleLength, rimLength) {
  let height = bottleLength - rimLength
  let side = radius * Math.sqrt(2)
  return Math.floor(side * side * height)
}


// TEST CASES
console.log(iceBrickVolume(1, 10, 2), 16, "radius = 1, bottleLength = 10, rimLength = 2");
console.log(iceBrickVolume(5, 30, 7), 1150, "radius = 5, bottleLength = 30, rimLength = 7");
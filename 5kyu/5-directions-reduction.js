// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Directions Reduction
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/550f22f4d758534c1100025a
*/

/* INSTRUCTIONS

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]

*/

// SOLUTION
function dirReduc(arr){
  let dirArr = []
  arr.map(direction => {
    const last = dirArr[dirArr.length - 1]
    
    if( (direction === "NORTH" && last === "SOUTH") ||
    (direction === "SOUTH" && last === "NORTH") ||
    (direction === "EAST" && last === "WEST") ||
    (direction === "WEST" && last === "EAST") ) {
      dirArr.pop()
    } else {
      dirArr.push(direction)
    }
  })
  return dirArr
}

// TEST CASES
console.log(dirReduc(
  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
  ["WEST"]
);
// console.log(dirReduc(
//   ["NORTH", "WEST", "SOUTH", "EAST"]),
//   ["NORTH", "WEST", "SOUTH", "EAST"]
// );
// console.log(dirReduc(
//   ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
//   []
// );
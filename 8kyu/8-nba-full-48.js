// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
NBA full 48 minutes average
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
*/

/* INSTRUCTIONS

An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!

*/

// SOLUTION
function pointsPer48(ppg, mpg) {
  return ppg === 0 || mpg === 0 ? 0 : Number((ppg * 48 / mpg).toFixed(1))
}

// TEST CASES
console.log(pointsPer48(12, 20), 28.8)
console.log(pointsPer48(10, 10), 48.0)
console.log(pointsPer48(5, 17), 14.1)
console.log(pointsPer48(0, 0), 0)
console.log(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
console.log(pointsPer48(22.9, 33.8), 32.5)  // Kemba Walker 1/15/17
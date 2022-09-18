// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Is the date today
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/563c13853b07a8f17c000022
*/

/* INSTRUCTIONS

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

*/

// SOLUTION
function isToday(date) {
  return date.toLocaleDateString() === new Date().toLocaleDateString()
}

// TEST CASES
const today = new Date();
let actualToday = isToday(today);
console.log(actualToday, true)

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow), false);

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday), false);

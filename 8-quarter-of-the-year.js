// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Quarter of the year
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af


// INSTRUCTIONS
// If you can't sleep, just count sheep!!

// Task:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// SOLUTION

const quarterOf = (month) => {
  if(month >= 1 && month <= 3) {
    return 1
  } else if(month >= 4 && month <= 6) {
    return 2
  } else if(month >= 7 && month <= 9) {
    return 3
  } else {
    return 4
  }
}


// // TEST CASES
console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)
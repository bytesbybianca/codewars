// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Return the day
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
*/

/* INSTRUCTIONS

Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

*/

// SOLUTION
function whatday(num) { 
  switch(num) {
    case 1: return 'Sunday'
    case 2: return 'Monday'
    case 3: return 'Tuesday'
    case 4: return 'Wednesday'
    case 5: return 'Thursday'
    case 6: return 'Friday'
    case 7: return 'Saturday'
    default: return 'Wrong, please enter a number between 1 and 7'
  }
}

// TEST CASES
console.log(whatday(1),'Sunday')
console.log(whatday(2), 'Monday')
console.log(whatday(3),'Tuesday')
console.log(whatday(8),  'Wrong, please enter a number between 1 and 7')
console.log(whatday(20),  'Wrong, please enter a number between 1 and 7')
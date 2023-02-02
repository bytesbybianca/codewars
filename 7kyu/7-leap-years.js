// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7kyu - Leap Years
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/526c7363236867513f0005ca
*/

/* INSTRUCTIONS

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.

*/

/*
positive nums = year
return true => leap year, false => if not

leap => divisible by 400, divisible by 4
not => divisible by 100
*/

// SOLUTION
function isLeapYear(year) {
  if(year % 4 === 0) {
    if(year % 100 === 0 && year % 400 !== 0) {
      return false
    }
    return true
  }
  return false
}

// TEST CASES
console.log(isLeapYear(1234), false, 'Year 1234');
console.log(isLeapYear(1984), true, 'Year 1984');
console.log(isLeapYear(2000), true, 'Year 2000');
console.log(isLeapYear(2010), false, 'Year 2010');
console.log(isLeapYear(2013), false, 'Year 2013');
console.log(isLeapYear(1200), true, 'Year 1200');
console.log(isLeapYear(1000), false, 'Year 1000');
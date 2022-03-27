// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Century From Year
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097


// INSTRUCTIONS
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.


// MY SOLUTION

function century(year) {
  if(year < 100) {
    return 1
  }
  let century = Number((year.toString().slice(0,-2)))
  let lastTwo = Number((year.toString().slice(2)))
  if(lastTwo == 0) {
    return century
  } else {
    return century += 1
  }
}


// TEST CASES
console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
console.log(century(680104), 6802, 'Testing for year 680104');


// CODE WARS SOLUTION

// const century = year => Math.ceil(year/100)
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Cat years, Dog years
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b


// INSTRUCTIONS
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// SOLUTION
var humanYearsCatYearsDogYears = function(humanYears) {
  let catAge = 0
  let dogAge = 0
  for(i = 1; i <= humanYears; i++) {
    if(i === 1) {
      catAge += 15;
      dogAge += 15;      
    } else if(i === 2) {
      catAge += 9;
      dogAge += 9;
    } else {
      catAge += 4;
      dogAge += 5;
    }
  }
  return [humanYears,catAge,dogAge];
}


// TEST CASES
console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
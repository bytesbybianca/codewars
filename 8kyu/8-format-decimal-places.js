// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Formatting decimal places #0
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5641a03210e973055a00000d


// INSTRUCTIONS
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


// SOLUTION

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}



// TEST CASES
console.log(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
console.log(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
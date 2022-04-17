// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Square Every Digit
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/546e2562b03326a88e000020


// INSTRUCTIONS
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// Note: The function accepts an integer and returns an integer


// SOLUTION

function squareDigits(num){
  return Number(num.toString().split('').map((x) => x ** 2).join(''));
}


// // TEST CASES
console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
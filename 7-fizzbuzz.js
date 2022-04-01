// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Fizz Buzz
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5300901726d12b80e8000498/


// INSTRUCTIONS
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.


// SOLUTION

function fizzbuzz(n) {
  let newArr = []
  for(i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 ===0) {
      newArr.push('FizzBuzz')
    } else if(i % 3 === 0) {
      newArr.push('Fizz')
    } else if(i % 5 === 0) {
      newArr.push('Buzz')
    } else {
      newArr.push(i)
    }
  } return newArr
}



// TEST CASES
console.log(fizzbuzz(10));
console.log(fizzbuzz(100));
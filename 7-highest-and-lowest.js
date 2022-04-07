// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Highest and Lowest
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/554b4ac871d6813a03000035


// INSTRUCTIONS
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// SOLUTION

function highAndLow(numbers){
  let sorted = numbers.split(' ').sort((a, b) => b - a)
  return `${sorted[0]} ${sorted[sorted.length - 1]}`
}


// // TEST CASES
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
console.log(highAndLow("1 2 3"), "3 1");
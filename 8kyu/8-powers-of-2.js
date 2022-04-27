// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Powers of 2
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57a083a57cb1f31db7000028


// INSTRUCTIONS
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// SOLUTION
function powersOfTwo(n){
  let newArr = []
  for(i = 0; i <= n; i++) {
    newArr.push(2**i)
  } return newArr
}

// TEST CASES
console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])
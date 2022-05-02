// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find the Remainder
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/524f5125ad9c12894e00003f


// INSTRUCTIONS
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// SOLUTION
function remainder(n, m){
  return n === m ? Math.abs(n % m) :
  n > m && m != 0 ? n % m : 
  m > n && n != 0 ? m % n : NaN
}



// TEST CASES
console.log(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
console.log(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
console.log(remainder(1, 0), 'Divide by zero should return NaN');
console.log(remainder(0, 0), 'Divide by zero should return NaN');
console.log(remainder(-594, 0), 0, 'Should return 0');
console.log(remainder(-13, -13), 0, 'Should return 0');
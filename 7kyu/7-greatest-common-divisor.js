// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Greatest common divisor
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd


/* INSTRUCTIONS

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/

// SOLUTION
function mygcd(x,y){
  if(x % y === 0) return y
  if(y % x === 0) return x
  for(let i = x; i >= 0; i -= 1) {
    if(x % i === 0 && y % i === 0) return i
  }
}

// TEST CASES
console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)
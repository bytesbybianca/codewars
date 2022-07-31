// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find Nearest square number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba


/* INSTRUCTIONS

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

*/

// SOLUTION
function nearestSq(n){
  for(let i = 1; ; i++) {
    if(Math.sqrt(n) % 1 === 0) {
      return n
    } else if(Math.sqrt(n + i) % 1 === 0) {
      return n + i
    } else if(Math.sqrt(n - i) % 1 === 0) {
      return n - i
    }
  }
}

// TEST CASES
console.log(nearestSq(1),1)
console.log(nearestSq(2),1)
console.log(nearestSq(10),9)
console.log(nearestSq(111),121)
console.log(nearestSq(9999),10000)
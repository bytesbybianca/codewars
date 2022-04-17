// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Beginner Series #2 Clock
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a


// INSTRUCTIONS
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


// SOLUTION

function past(h, m, s) {
  return 3600000 * h + 60000 * m + 1000 * s
}

// TEST CASES
console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)



// CODE WARS BEST PRACTICE SOLUTION

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
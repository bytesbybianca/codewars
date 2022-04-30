// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Super Duper Easy
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55a5bfaa756cfede78000026


// INSTRUCTIONS
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// SOLUTION

function problem(x){
  return typeof(x) == 'string' ? 'Error' : x*50+6
}

// TEST CASES
console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);
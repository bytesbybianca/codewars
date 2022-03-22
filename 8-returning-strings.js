// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Returning Strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55a70521798b14d4750000a4


// INSTRUCTIONS
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


// SOLUTION

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// TEST CASES
console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");



// CODE WARS BEST PRACTICE SOLUTION

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

// woo :)
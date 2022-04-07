// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Grasshopper - Personalized Message
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5772da22b89313a4d50012f7


// INSTRUCTIONS
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.


// SOLUTION

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}


// // TEST CASES
console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')
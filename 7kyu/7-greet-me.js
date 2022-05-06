// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Greet Me
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/535474308bb336c9980006f2


// INSTRUCTIONS
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.


// SOLUTION
var greet = function(name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};


// // TEST CASES
console.log(greet('riley'), 'Hello Riley!');
console.log(greet('BILLY'), 'Hello Billy!');
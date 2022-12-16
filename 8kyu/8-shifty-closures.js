// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Shifty Closures
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/514aa0dc21607ae236000017
*/

/* INSTRUCTIONS

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

*/

// SOLUTION
var name = 'Abe';
function greet_abe() {
  return "Hello, " + name + '!';
};

function greet_ben() {
  name = 'Ben';
  return "Hello, " + name + '!';
};

// TEST CASES         
console.log(greet_abe(), 'Hello, Abe!');
console.log(greet_ben(), 'Hello, Ben!');
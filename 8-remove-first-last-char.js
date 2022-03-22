// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove First and Last Character
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0


// INSTRUCTIONS
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// SOLUTION

function removeChar(str){
  return str.slice(1, -1)
 };

// TEST CASES
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');



// CODE WARS BEST PRACTICE SOLUTION

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// woo :)
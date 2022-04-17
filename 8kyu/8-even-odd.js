// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Even or Odd
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/


// INSTRUCTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// SOLUTION
function even_or_odd(number) {
  if(number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// TEST CASES
console.log(even_or_odd(2), "Even");
console.log(even_or_odd(7), "Odd");
console.log(even_or_odd(-42), "Even");
console.log(even_or_odd(-7), "Odd");
console.log(even_or_odd(0), "Even");


// CODE WARS BEST PRACTICE SOLUTION

// function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even"
// }
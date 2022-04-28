// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Drink about
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56170e844da7c6f647000063


// INSTRUCTIONS
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// SOLUTION
function peopleWithAgeDrink(old) {
  return old >= 21 ? 'drink whisky' :
  old >= 18 ? 'drink beer' :
  old >= 14 ? 'drink coke' : 'drink toddy'
};

// TEST CASES
console.log(peopleWithAgeDrink(22), 'drink whisky');
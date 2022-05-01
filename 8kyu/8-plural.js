// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Plural
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a


// INSTRUCTIONS
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.



// SOLUTION
function plural(n) {
  return n !== 1
}


// TEST CASES
console.log(plural(0), true, "Plural for 0");
console.log(plural(0.5), true, "Plural for 0.5");
console.log(plural(1), false, "Plural for 1");
console.log(plural(100), true, "Plural for 100");
console.log(plural(Infinity), true, "Plural for Infinity");
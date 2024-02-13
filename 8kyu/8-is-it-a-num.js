// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Is it a number?
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57126304cdbf63c6770012bd
*/

/* INSTRUCTIONS

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")


*/
/* SOLUTION

*/
function isDigit(s) {
	return parseFloat(s) == s.trim();
}

// TEST CASES
console.log(isDigit("s2324"), false);
console.log(isDigit("3-4"), false);
console.log(isDigit("  3   5"), false);
console.log(isDigit("3 5"), false);
console.log(isDigit("zero"), false);
console.log(isDigit("-234.4"), true);
console.log(isDigit("  3  "), true);
console.log(isDigit("3"), true);
console.log(isDigit("-3.23"), true);

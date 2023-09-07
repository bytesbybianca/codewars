// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Say hello!
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55955a48a4e9c1a77500005a/
*/

/* INSTRUCTIONS

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

*/
/* SOLUTION

*/
function greet(name) {
	return name ? `hello ${name}!` : null;
}

// TEST CASES
console.log(greet("Niks"), "hello Niks!");
console.log(greet(null), null);

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Build a square
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
*/

/* INSTRUCTIONS

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/
/* SOLUTION

*/
function generateShape(integer) {
	let string = "";
	for (let i = 1; i <= integer; i++) {
		string += "+".repeat(integer);
		if (i < integer) {
			string += "\n";
		}
	}

	return string;
}

// TEST CASES
console.log(
	generateShape(8),
	"++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
);

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Sum of integers in string
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/598f76a44f613e0e0b000026
*/

/* INSTRUCTIONS

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/
/* SOLUTION

*/
function sumOfIntegersInString(s) {
	let sum = 0;
	let currentInteger = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i].charCodeAt() < 48 || s[i].charCodeAt() > 57) {
			if (currentInteger) sum += Number(currentInteger);
			currentInteger = "";
		} else {
			currentInteger += s[i];
			if (i == s.length - 1) {
				if (currentInteger) sum += Number(currentInteger);
			}
		}
	}

	return sum;
}

// TEST CASES
let = exampleTests = [
	["12.4", 16],
	["h3ll0w0rld", 3],
	["2 + 3 = ", 5],
	[
		"Our company made approximately 1 million in gross revenue last quarter.",
		1,
	],
	["The Great Depression lasted from 1929 to 1939.", 3868],
	["Dogs are our best friends.", 0],
	["C4t5 are 4m4z1ng.", 18],
	["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635],
];

exampleTests.forEach(([testString, correctAnswer]) =>
	console.log(sumOfIntegersInString(testString), correctAnswer)
);

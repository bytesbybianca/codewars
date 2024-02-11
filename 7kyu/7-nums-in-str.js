// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Numbers in strings
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014
*/

/* INSTRUCTIONS

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!


*/
/* SOLUTION

*/
function solve(s) {
	// array
	let arr = [],
		num = "";
	// loop through string
	for (let i = 0; i < s.length; i++) {
		// if number, range 48 - 57
		let number = s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57,
			letter = !number;

		// if a number, add to num string
		if (number) {
			num += s[i];
		}

		// if last el or a letter, if numstring has length, push to array, clear num string
		if (letter || i === s.length - 1) {
			if (num) {
				arr.push(Number(num));
				num = "";
			}
		}
	}
	return Math.max(...arr);
}

// TEST CASES
console.log(solve("gh12cdy695m1"), 695);
console.log(solve("2ti9iei7qhr5"), 9);
console.log(solve("vih61w8oohj5"), 61);
console.log(solve("f7g42g16hcu5"), 42);
console.log(solve("lu1j8qbbb85"), 85);

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
SevenAte9
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/559f44187fa851efad000087
*/

/* INSTRUCTIONS

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/
/* SOLUTION

*/
function sevenAte9(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == 9 && str[i - 1] == 7 && str[i + 1] == 7) {
		} else {
			result += str[i];
		}
	}

	return result;
}

// TEST CASES
const test = (input, expected) => {
	console.log(sevenAte9(input), expected);
};

const tests = [
	["797", "77"],
	["7979797", "7777"],
	["165561786121789797", "16556178612178977"],
];

for (const [input, expected] of tests) {
	test(input, expected);
}

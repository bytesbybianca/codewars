// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Evens and Odds
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/583ade15666df5a64e000058
*/

/* INSTRUCTIONS

DESCRIPTION:
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

*/
/* SOLUTION

*/
function evensAndOdds(num) {
	if (num % 2 === 0) {
		return num.toString(2);
	}
	return num.toString(16);
}

// TEST CASES

function doTest(number, expected) {
	const actual = evensAndOdds(number);
	console.log(actual, expected, `for n = ${number}:\n`);
}

doTest(2, "10");
doTest(13, "d");
doTest(47, "2f");
doTest(0, "0");
doTest(12800, "11001000000000");
doTest(8172381723, "1e71ca61b");

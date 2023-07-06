// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Numbers to Letters
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
*/

/* INSTRUCTIONS

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

*/
/* SOLUTION

*/
function switcher(x) {
	let result = "";
	for (let i = 0; i < x.length; i++) {
		let number = 26 - Number(x[i]) + 1 + 96;
		result +=
			x[i] === "27"
				? "!"
				: x[i] === "28"
				? "?"
				: x[i] === "29"
				? " "
				: String.fromCharCode(number);
	}
	return result;
}

// TEST CASES
console.log(
	switcher(["24", "12", "23", "22", "4", "26", "9", "8"]),
	"codewars"
);
console.log(
	switcher([
		"25",
		"7",
		"8",
		"4",
		"14",
		"23",
		"8",
		"25",
		"23",
		"29",
		"16",
		"16",
		"4",
	]),
	"btswmdsbd kkw"
);
console.log(switcher(["4", "24"]), "wc");

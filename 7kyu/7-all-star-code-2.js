// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
All Star Code Challenge #22
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5865cff66b5699883f0001aa
*/

/* INSTRUCTIONS

This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"

*/
/* SOLUTION

*/
function toTime(seconds) {
	let secsPerHour = 60 * 60;
	let hours = Math.floor(seconds / secsPerHour);
	let secsLeft = seconds - hours * secsPerHour;
	return `${hours} hour(s) and ${Math.floor(secsLeft / 60)} minute(s)`;
}

// TEST CASES
console.log(toTime(3600), "1 hour(s) and 0 minute(s)");
console.log(toTime(3601), "1 hour(s) and 0 minute(s)");
console.log(toTime(3500), "0 hour(s) and 58 minute(s)");
console.log(toTime(323500), "89 hour(s) and 51 minute(s)");
console.log(toTime(0), "0 hour(s) and 0 minute(s)");

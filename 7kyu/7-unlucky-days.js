// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Unlucky Days
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56eb0be52caf798c630013c0
*/

/* INSTRUCTIONS

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/
/* SOLUTION

year
number of friday the 13th in year => if month starts on a sunday

Date => looping through all the months, count number of months starting on a sunday

*/
function unluckyDays(year) {
	let date = new Date(year, 0, 1);
	let count = 0;
	for (let i = 0; i < 12; i++) {
		// if day = 0, count++
		if (date.getDay() == 0) {
			count++;
		}
		date.setMonth(date.getMonth() + 1);
	}
	return count;
}

// TEST CASES
console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");

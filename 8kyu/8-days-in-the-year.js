// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Days in the year
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
*/

/* INSTRUCTIONS

A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

*/
/* SOLUTION

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.

*/
function yearDays(year) {
	return year % 100 === 0 && year % 400 === 0
		? `${year} has 366 days`
		: year % 100 && year % 4 === 0
		? `${year} has 366 days`
		: `${year} has 365 days`;
}

// TEST CASES
console.log(yearDays(0), "0 has 366 days");
console.log(yearDays(-64), "-64 has 366 days");
console.log(yearDays(2016), "2016 has 366 days");
console.log(yearDays(1974), "1974 has 365 days");
console.log(yearDays(-10), "-10 has 365 days");
console.log(yearDays(666), "666 has 365 days");
console.log(yearDays(1857), "1857 has 365 days");

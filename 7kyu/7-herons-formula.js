// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Heron's formula
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57aa218e72292d98d500240f
*/

/* INSTRUCTIONS

DESCRIPTION:
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

Square root of√s(s - a)(s - b)(s - c)

where:

s = (a + b + c)/2.
​
 
Output should have 2 digits precision.



*/
/* SOLUTION

*/
function heron(a, b, c) {
	let s = (a + b + c) / 2;
	return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// TEST CASES
function dotest(a, b, c, expected) {
	console.log(heron(a, b, c), expected, `With a = ${a}, b = ${b}, c = ${c}`);
}

dotest(3, 4, 5, 6);
dotest(6, 8, 10, 24);

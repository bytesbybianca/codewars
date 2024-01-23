// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Area of a Circle
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/537baa6f8f4b300b5900106c
*/

/* INSTRUCTIONS

Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error

*/
/* SOLUTION

*/
function circleArea(radius) {
	if (radius <= 0) {
		throw new Error();
	}
	return Number((Math.PI * radius ** 2).toFixed(3));
}

// TEST CASES
console.log(circleArea(1), 3.141, 0.01);
console.log(circleArea(43.2673), 5881.248, 0.01);
console.log(circleArea(68), 14526.724, 0.01);
console.log(circleArea(0), Error);
console.log(circleArea(-1), Error);

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Largest Square Inside A Circle
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5887a6fe0cfe64850800161c
*/

/* INSTRUCTIONS

Determine the area of the largest square that can fit inside a circle with radius r.

*/
/* SOLUTION

*/
function areaLargestSquare(r) {
	let side = (r * 2) / Math.sqrt(2);
	return Math.ceil(side * side);
}

// TEST CASES
console.log(areaLargestSquare(5), 50);
console.log(areaLargestSquare(7), 98);
console.log(areaLargestSquare(15), 450);

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Quadrants
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/643af0fa9fa6c406b47c5399
*/

/* INSTRUCTIONS

Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

*/
/* SOLUTION

*/
function quadrant(x, y) {
	if (x >= 1) {
		if (y >= 1) return 1;
		return 4;
	} else {
		if (y >= 1) return 2;
		return 3;
	}
}

// TEST CASES
const tests = {
	Example: [
		[1, 2, 1],
		[3, 5, 1],
		[-10, 100, 2],
		[-1, -9, 3],
		[19, -56, 4],
	],
};
for (var k of Object.keys(tests)) {
	for (var t of tests[k]) {
		console.log(quadrant(t[0], t[1]), t[2]);
	}
}

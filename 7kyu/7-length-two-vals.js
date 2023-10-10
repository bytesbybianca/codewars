// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Length and two values.
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/62a611067274990047f431a8/
*/

/* INSTRUCTIONS

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

*/
/* SOLUTION

*/
function alternate(n, firstValue, secondValue) {
	let count = 0;
	let arr = [];
	for (let i = 0; count < n; i++) {
		if (count !== n) {
			if (i % 2 == 0) {
				arr.push(firstValue);
			} else {
				arr.push(secondValue);
			}
		}
		count++;
	}
	return arr;
}

// TEST CASES
console.log(alternate(5, true, false), [true, false, true, false, true]);
console.log(alternate(20, "blue", "red"), [
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
	"blue",
	"red",
]);
console.log(alternate(0, "lemons", "apples"), []);

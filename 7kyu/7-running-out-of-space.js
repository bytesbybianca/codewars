// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Running out of space
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56576f82ab83ee8268000059
*/

/* INSTRUCTIONS

DESCRIPTION:
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

*/
/* SOLUTION

*/
function spacey(array) {
	let newArr = [];
	array.reduce((acc, c) => {
		newArr.push(acc + c);
		return acc + c;
	}, "");
	return newArr;
}

// TEST CASES
console.log(spacey(["kevin", "has", "no", "space"]), [
	"kevin",
	"kevinhas",
	"kevinhasno",
	"kevinhasnospace",
]);
console.log(spacey(["this", "cheese", "has", "no", "holes"]), [
	"this",
	"thischeese",
	"thischeesehas",
	"thischeesehasno",
	"thischeesehasnoholes",
]);

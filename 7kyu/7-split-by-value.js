// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Split By Value
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc
*/

/* INSTRUCTIONS

DESCRIPTION:
For an integer k rearrange all the elements of the given array in such way, that:

all elements that are less than k are placed before elements that are not less than k;
all elements that are less than k remain in the same order with respect to each other;
all elements that are not less than k remain in the same order with respect to each other.

For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].

*/
/* SOLUTION

*/
function splitByValue(k, elements) {
	let left = [],
		right = [];
	for (let i = 0; i < elements.length; i++) {
		if (elements[i] < k) {
			left.push(elements[i]);
		} else {
			right.push(elements[i]);
		}
	}
	return left.concat(right);
}

// TEST CASES
console.log(splitByValue(5, [1, 3, 5, 7, 6, 4, 2]), [1, 3, 4, 2, 5, 7, 6]);
console.log(splitByValue(0, [5, 2, 7, 3, 2]), [5, 2, 7, 3, 2]);
console.log(splitByValue(6, [6, 4, 10, 10, 6]), [4, 6, 10, 10, 6]);

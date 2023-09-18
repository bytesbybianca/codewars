// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Remove All The Marked Elements of a List
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/563089b9b7be03472d00002b
*/

/* INSTRUCTIONS

Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!

*/
/* SOLUTION

*/
Array.prototype.remove_ = function (integer_list, values_list) {
	let filtered = [];
	for (let num of integer_list) {
		if (!values_list.includes(num)) {
			filtered.push(num);
		}
	}
	return filtered;
};

// TEST CASES
l = new Array();

integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
console.log(l.remove_(integer_list, values_list), [2, 2, 4]);

integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list = [1, 3, 4, 2];
console.log(l.remove_(integer_list, values_list), [5, 6, 7, 8]);

integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3];
values_list = [2, 4, 3];
console.log(l.remove_(integer_list, values_list), [8, 7, 6, 5, 1]);

integer_list = [4, 4, 2, 3];
values_list = [2, 2, 4, 3];
console.log(l.remove_(integer_list, values_list), []);

integer_list = [];
values_list = [2, 2, 4, 3];
console.log(l.remove_(integer_list, values_list), []);

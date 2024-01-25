// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Miles per gallon to kilometers per liter
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/557b5e0bddf29d861400005d/
*/

/* INSTRUCTIONS

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/
/* SOLUTION

*/
function converter(mpg) {
	return Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
}

// TEST CASES
console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);

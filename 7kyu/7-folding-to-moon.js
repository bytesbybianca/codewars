// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Folding your way to the moon
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58f0ba42e89aa6158400000e
*/

/* INSTRUCTIONS

Task
Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

*/

/* SOLUTION

*/
function foldTo(distance) {
	if (distance < 0) return null;

	let paperFolds = 0;
	let paperThickness = 0.0001;
	while (paperThickness < distance) {
		paperFolds++;
		paperThickness *= 2;
	}
	return paperFolds;
}

// TEST CASES
console.log(foldTo(384000000), 42);

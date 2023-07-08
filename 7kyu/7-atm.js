// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
ATM
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5635e7cb49adc7b54500001c
*/

/* INSTRUCTIONS

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

*/
/* SOLUTION

*/
function solve(n) {
	let banknotes = [10, 20, 50, 100, 200, 500];
	let count = 0;
	for (let i = banknotes.length - 1; i >= 0; i--) {
		count += Math.floor(n / banknotes[i]);
		n = n % banknotes[i];
	}
	return n === 0 ? count : -1;
}

// TEST CASES
console.log(solve(770), 4);
console.log(solve(550), 2);
console.log(solve(10), 1);
console.log(solve(1250), 4);
console.log(solve(125), -1);
console.log(solve(666), -1);
console.log(solve(42), -1);

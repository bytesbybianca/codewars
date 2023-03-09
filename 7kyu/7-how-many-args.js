// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
How many arguments
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5c44b0b200ce187106452139
*/

/* INSTRUCTIONS

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/

/* SOLUTION

*/
function args_count() {
  return arguments.length
}

// TEST CASES
console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(["foo", "bar"]), 1);
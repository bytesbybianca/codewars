// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
easy logs
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5b68c7029756802aa2000176
*/

/* INSTRUCTIONS

Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

*/

/* SOLUTION

*/
function logs(x , a, b){
  return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x))
  }

// TEST CASES
console.log(logs(10, 2, 3), 0.7781512503836435);
console.log(logs(5, 2, 3), 1.1132827525593785);
console.log(logs(1000, 2, 3), 0.25938375012788123);
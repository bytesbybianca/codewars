// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Functional Addition
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/538835ae443aae6e03000547
*/

/* INSTRUCTIONS

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

*/

/* SOLUTION

*/
function add(n) {
  return function addN(m) {
    return n + m
  }
}

// TEST CASES
console.log(add(1)(3), 4, 'add one to three equals four')
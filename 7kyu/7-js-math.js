// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Javascript Mathematician
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55c211cce1ef691d9b000061
*/

/* INSTRUCTIONS

You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17

*/

/* SOLUTION

*/
function calculate(...a) {
    return function (...b) {
        return [...a, ...b].reduce((n, m) => n + m, 0)
    }
}

// TEST CASES
console.log(calculate(1)(1), 2);
console.log(calculate(1,1)(1) , 3);
console.log(calculate(1,1)(1,-1), 2);
console.log(calculate(2,4)(3,7,1), 17);
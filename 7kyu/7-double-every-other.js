// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Double Every Other
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5809c661f15835266900010a
*/

/* INSTRUCTIONS

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]

*/

// SOLUTION
function doubleEveryOther(a) {
    for(let i = 0; i < a.length; i++) {
        if(i % 2) a[i] *= 2
    }
    return a
}

// TEST CASES
console.log( doubleEveryOther([1,2,3,4]), [1,4,3,8] );
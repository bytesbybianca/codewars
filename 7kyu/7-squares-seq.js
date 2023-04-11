// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Squares sequence
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5546180ca783b6d2d5000062
*/

/* INSTRUCTIONS

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/

/* SOLUTION

*/
function squares(x, n) {
    let result = []
    let num = x
    while(result.length < n) {
        result.push(num)
        num *= num
    }

    return result
}

// TEST CASES
console.log(squares(2,5),[2,4,16,256,65536]);   
console.log(squares(3,3),[3,9,81]);  
console.log(squares(5,3),[5,25,625]);  
console.log(squares(10,4),[10,100,10000,100000000]);  
console.log(squares(2,0), []);
console.log(squares(2,-5), []);
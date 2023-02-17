// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Merge two arrays
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/583af10620dda4da270000c5
*/

/* INSTRUCTIONS

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

*/

// SOLUTION
function mergeArrays(a, b) {
    let result = []
    for(let i = 0; i < (Math.max(a.length, b.length)); i++) {
        if(a[i]) result.push(a[i])
        if(b[i]) result.push(b[i])
    }
    return result
}

// TEST CASES
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
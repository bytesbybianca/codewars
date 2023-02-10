// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Filter unused digits
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55de6173a8fbe814ee000061
*/

/* INSTRUCTIONS

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.



*/

// SOLUTION
function unusedDigits() {
    const digits = '0123456789'.split('')
    let argNums = ''
    for(let char of arguments) {
        argNums += char
    }

    return digits.filter(x => !argNums.includes(x)).join('')
}

// TEST CASES
console.log(unusedDigits(12, 34, 56, 78), "09")
console.log(unusedDigits(2015, 8, 26), "3479")
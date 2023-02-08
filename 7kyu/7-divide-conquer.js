// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Divide and Conquer
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57eaec5608fed543d6000021
*/

/* INSTRUCTIONS

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.

*/

// SOLUTION
function divCon(x){
    let sum = 0
    
    for(let i = 0; i < x.length; i++) {
        if(typeof x[i] == 'string') sum -= Number(x[i])
        if(typeof x[i] == 'number') sum += Number(x[i])
    }

    return sum
}

// TEST CASES
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
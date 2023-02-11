// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Move 10
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57cf50a7eca2603de0000090
*/

/* INSTRUCTIONS

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

*/

/*
a = 97
z = 122
*/

// SOLUTION
function moveTen(s){
    let result = ''
    for(const char of s) {
        if((char.charCodeAt() + 10) >= 97 && (char.charCodeAt() + 10) <= 122) {
            result += String.fromCharCode(char.charCodeAt() + 10)
        } else if((char.charCodeAt() + 10) > 122) {
            result += String.fromCharCode(char.charCodeAt() + 10 - 26)
        }
    }

    return result
}

// TEST CASES
console.log(moveTen("az"), "kj");
// console.log(moveTen("ztestcase"), "docdmkco");
// console.log(moveTen("codewars"), "mynogkbc");
// console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");
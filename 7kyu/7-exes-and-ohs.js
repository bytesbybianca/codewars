// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Exes and Ohs
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55908aad6620c066bc00002a


// INSTRUCTIONS
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


// SOLUTION

function XO(str) {
    let xCount = 0
    let oCount = 0
        str.toLowerCase().split('').map((letter) => {
        if(letter.includes('x')) {
            xCount++
        } else if(letter.includes('o')) {
            oCount++
        }
    }) 
    return xCount === oCount
}


// // TEST CASES
console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
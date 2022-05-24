// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Testing 1-2-3
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9


// INSTRUCTIONS
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

/* PREP
P: an empty array or an array with strings

R: 
if array is empty - []
otherwise - return "index + 1: element" for each element

E:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

P:
*/

// SOLUTION
var number=function(array){
  // loop through all elements and format the string
  return array.map((x, i) => `${i + 1}: ${x}`)
}


// TEST CASES
console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);      
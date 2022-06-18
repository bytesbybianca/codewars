// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Duplicate Encoder
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/


/* INSTRUCTIONS
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

P: a string of characters
R: a new string replacing each character that appears only once in original string with '(' or ')' if more than once, ignoring caps

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// SOLUTION
function duplicateEncode(word){
  // lowercase & split string to isolate each character
  let splitWord = word.toLowerCase().split('')
  return splitWord.map(x => {
    // for each character, filter for the character
    // if it appears only once, replace with '('
    if(splitWord.filter(charCheck => charCheck == x).length == 1) {
      return '('
      // otherwise, replace with ')'
    } else return ')'
  }).join('')
}

// // TEST CASES
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");
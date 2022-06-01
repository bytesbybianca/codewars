// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Simple Pig Latin
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/520b9d2ad5c005041100000f


// INSTRUCTIONS
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

/*
P: a string with or without punctuation
R: a string in Pig Latin (first letter moved to the end with "ay" at the end of word) with punctuation untouched

E:
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

P:

*/

// SOLUTION
function pigIt(str){
  // split string to words
  return str.split(' ').map(word => {
    // check if character is a letter
    // if not a letter, return as is
    if(word.toLowerCase() === word.toUpperCase()) return word
    // if a letter, slice 1 + str[0] + "ay"
      else return word.slice(1) + word[0] + "ay"
    // join
  }).join(' ')
}

// // TEST CASES
console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')
console.log(pigIt('Hello world !'),'elloHay orldway !')
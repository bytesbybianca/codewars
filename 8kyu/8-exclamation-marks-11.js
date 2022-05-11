// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed


// INSTRUCTIONS
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


// SOLUTION
function replace(s){
  let vowels = 'aeiouAEIOU'
  return s.split('').map(x => vowels.includes(x) ? '!' : x).join('')
}

// // TEST CASES
console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")
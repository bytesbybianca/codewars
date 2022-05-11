// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reverse every other word in the string
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58d76854024c72c3e20000de/


// INSTRUCTIONS
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


// SOLUTION
function reverse(str){
  return str.split(' ').map((word, i) => i % 2 != 0 ? word.split('').reverse().join('') : word).join(' ').trim()
}

// // TEST CASES
console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
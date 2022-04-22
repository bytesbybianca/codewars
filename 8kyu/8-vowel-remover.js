// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Vowel remover
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5547929140907378f9000039


// INSTRUCTIONS
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.


// SOLUTION

function shortcut (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return consonants = string.split('').filter(letter => !(vowels.includes(letter))).join('')
}


// TEST CASES
console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');
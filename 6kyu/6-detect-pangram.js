// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Detect Pangram
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048


// INSTRUCTIONS
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// SOLUTION
function isPangram(string){
  let alphabet = []
  for(i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode((i)))
  }
  let newStr = [...new Set(string.toLowerCase().split(''))].sort().filter(x => alphabet.includes(x))
  return newStr.join('') == alphabet.join('')
}

// // TEST CASES
var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)
string = "This is not a pangram."
console.log(isPangram(string), false)
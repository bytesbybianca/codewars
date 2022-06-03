// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Where my anagrams at?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1


// INSTRUCTIONS
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

/*
P: word to find anagram for, an array of words to test against word
R: an array of two words, [word, anagram]
E:
if no anagrams, empty array
else - 
// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
P:
*/

// SOLUTION
function anagrams(word, words) {
   let arr = []
   // sort word
   let sortedWord = word.split('').sort().join('')
   // loop through array of words and sort each
   words.map(x => {
      // compare to sorted word
      // if equal, push words into array
      if(x.split('').sort().join('') === sortedWord) arr.push(x)
   })
   // return array
   return arr
}


// // TEST CASES
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
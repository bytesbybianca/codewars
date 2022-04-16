// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Anagram Detection
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255


// INSTRUCTIONS
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// SOLUTION

// write the function isAnagram
var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
};


// // TEST CASES
console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')
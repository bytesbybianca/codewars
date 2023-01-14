// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Partial Word Searching
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54b81566cd7f51408300022d


/* INSTRUCTIONS

Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].



*/

// SOLUTION
function wordSearch(query, seq){
  let result = []
  for(let i = 0; i < seq.length; i++) {
    if(seq[i].toLowerCase().includes(query.toLowerCase())) result.push(seq[i])
  }

  return !result.length ? ["Empty"] : result
}

// TEST CASES
console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])
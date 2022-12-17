// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
All unique
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/553e8b195b853c6db4000048
*/

/* INSTRUCTIONS

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/

// SOLUTION
function hasUniqueChars(str){
  let map = {}

  for(const char of str) {
    if(map[char]) {
      return false
    } else {
      map[char] = 1
    }
  }
  return true
}

// TEST CASES         
console.log(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"),true)
console.log(hasUniqueChars("aA"),true) // case - sensitivity
console.log(hasUniqueChars("++-"),false) // because there are two '+'
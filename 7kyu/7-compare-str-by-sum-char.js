// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Compare Strings by Sum of Chars
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/576bb3c4b1abc497ec000065
*/

/* INSTRUCTIONS

Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal

*/

// SOLUTION
function compare(s1, s2) {
  if(!s1) s1 = ''
  if(!s2) s2 = ''

  let sum1 = 0
  let sum2 = 0

  for(let char of s1.toUpperCase()) {
    let valid = (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)

    if(valid) {
      sum1 += char.charCodeAt()
    } else {
      s1 = ''
      sum1 = 0
    }
  }
  
  for(let char of s2.toUpperCase()) {
    let valid = (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)

    if(valid) {
      sum2 += char.charCodeAt()
    } else {
      s2 = ''
      sum2 = 0
    }
  }
  
  return sum1 === sum2
}

// TEST CASES
console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare("gf", "FG"), true);
console.log(compare("Ad", "DD"), false);
console.log(compare("zz1", ""), true);
console.log(compare("ZzZz", "ffPFF"), true);
console.log(compare("kl", "lz"), false);
console.log(compare("!!", "7476"), true);
console.log(compare("##", "1176"), true);
console.log(compare(null, "BC"), false);
console.log(compare(null, null), true);
console.log(compare(null, ""), true);
console.log(compare("", ""), true);
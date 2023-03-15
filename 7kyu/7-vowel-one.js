// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Vowel one
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/580751a40b5a777a200000a1
*/

/* INSTRUCTIONS

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/

/* SOLUTION

*/
const vowels = 'aeiou'

function vowelOne(s){
  let result = ''
  for(const char of s) {
    if(vowels.includes(char.toLowerCase())) {
      result += '1'
    } else {
      result += '0'
    }
  }

  return result
}

// TEST CASES
console.log( vowelOne( "vowelOne" ), "01010101" );
console.log( vowelOne( "123, arou" ), "000001011" );
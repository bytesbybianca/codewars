// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Longest vowel chain
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59c5f4e9d751df43cf000035
*/

/* INSTRUCTIONS

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

*/

// SOLUTION
function solve(s){
  const vowels = 'aeiou'
  let longestLength = 0

  for(let i = 0; i < s.length; i++) {
    let currentLength = 0
    while(vowels.includes(s[i])) {
      currentLength++
      i++
    }

    if(currentLength > longestLength) {
      longestLength = currentLength
    }
  }

  return longestLength
 }

// TEST CASES
console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);
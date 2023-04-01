// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Count consonants
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/564e7fc20f0b53eb02000106
*/

/* INSTRUCTIONS

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

/* SOLUTION

*/
function consonantCount(str) {
  const vowels = 'aeiou'
  let count = 0

  for(const char of str.toLowerCase()) {
    if(!vowels.includes(char) && char.charCodeAt() >= 97 && char.charCodeAt() <= 122) count++
  }

  return count
}

// TEST CASES
console.log(consonantCount('', 0));
console.log(consonantCount('aeiouAEIOU', 0));
console.log(consonantCount('aaa', 0));
console.log(consonantCount('bcdfghjklmnpqrstvwxyz', 21));
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42));
console.log(consonantCount('y', 1));
console.log(consonantCount('Y', 1));
console.log(consonantCount('01234567890_', 0));
console.log(consonantCount(' ^&$#', 0));
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42));
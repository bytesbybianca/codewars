// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7kyu - Love vs friendship
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59706036f6e5d1e22d000016
*/

/* INSTRUCTIONS

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

*/

// SOLUTION
function wordsToMarks(string){
  let alphabet = {}
  let sum = 0
  
  for(let i = 1; i <= 26; i++) {
    alphabet[String.fromCharCode(96 + i)] = i
  }

  for(const char of string) {
    sum += alphabet[char]
  }

  return sum
}

// TEST CASES
console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
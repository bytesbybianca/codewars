// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
shorter concat [reverse longer]
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/54557d61126a00423b000a45
*/

/* INSTRUCTIONS

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

*/

// SOLUTION
function shorter_reverse_longer(a,b){
  let longerStr = a
  let shorterStr = b
  let result = ''

  if(a.length < b.length) {
    longerStr = b
    shorterStr = a
  }

  result += shorterStr

  for(const char of longerStr) {
    result = char + result
  }

  return shorterStr + result
}

// TEST CASES
console.log(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");
console.log(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi");
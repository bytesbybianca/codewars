// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Backspaces in string
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
*/

/* INSTRUCTIONS

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

// SOLUTION
function cleanString(s) {
  let str = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '#') {
      str.pop()
    } else {
      str.push(s[i])
    }
  }
  return str.join('')
}

// TEST CASES
console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
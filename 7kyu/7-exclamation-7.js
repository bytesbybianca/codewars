// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57fafb6d2b5314c839000195
*/

/* INSTRUCTIONS

Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

*/

/* SOLUTION

*/
function remove (string) {
  let strArr = string.split(' ')
  let result = []
  strArr.map(word => {
    if(word.split('').filter(char => char === '!').length !== 1) result.push(word)
  })
  return result.join(' ')
}

// TEST CASES
console.log(remove("Hi!"), "");
console.log(remove("Hi! Hi!"), "");
console.log(remove("Hi! Hi! Hi!"), "");
console.log(remove("Hi Hi! Hi!"), "Hi");
console.log(remove("Hi! !Hi Hi!"), "");
console.log(remove("Hi! Hi!! Hi!"), "Hi!!");
console.log(remove("Hi! !Hi! Hi!"), "!Hi!");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Exclamation marks series #2: Remove all exclamation marks from the end of sentence
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57faece99610ced690000165
*/

/* INSTRUCTIONS

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

// SOLUTION
function remove (string) {  
  for(let i = string.length - 1; i >= 0; i--) {
    if(string[i] === '!') {
      string = string.slice(0, i)
    } else {
      return string
    }
  }
}

// TEST CASES         
console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")
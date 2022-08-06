// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57faf7275c991027af000679
*/

/* INSTRUCTIONS

Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

// SOLUTION
function remove(s,n){
  let count = 0
  let str = ''
  // loop through the string
  for(let i = 0; i < s.length; i++) {
    // if count is greater than or equal to n
    if(count >= n) {
      // add rest of s to the string
      str += s[i]
    // if count is less than n
    } else if(count < n) {
        // check to see if character is '!'
        if(s[i] !== '!') {
          // if not an '!', add character to string
          str += s[i]
        } else {
          // add to count
          count++
        }
    }
  }
  return str
}

// TEST CASES
console.log(remove("Hi!",1) , "Hi")
console.log(remove("Hi!",100) , "Hi")
console.log(remove("Hi!!!",1) , "Hi!!")
console.log(remove("Hi!!!",100) , "Hi")
console.log(remove("!Hi",1) , "Hi")
console.log(remove("!Hi!",1) , "Hi!")
console.log(remove("!Hi!",100) , "Hi")
console.log(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
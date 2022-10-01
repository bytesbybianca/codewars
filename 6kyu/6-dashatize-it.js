// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Dashatize it
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58223370aef9fc03fd000071
*/

/* INSTRUCTIONS

Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

PREP
P: a number, positive or negative, or NaN. If negative, negative sign should be removed
R: number as a string, with dashes before and after each odd integer. string should not start or end with a dash

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

// SOLUTION
function dashatize(num) {
  if(num === 0 || Number.isNaN(num) || num.length === 1 ) return num.toString()
  if(Math.abs(num).toString().length == 1) return Math.abs(num).toString()

  // absolute value of number
  // turn into string
  // split by each character
  let splitNum = Math.abs(num).toString().split('')
  let result = []

  for(let i = 0; i < splitNum.length; i++) {
    const prev = splitNum[i - 1] || null
    const curr = splitNum[i]
    const next = splitNum[i + 1]  || null

    // if odd
    if(curr % 2) {
      // if first character and next char is even
      if(prev == null && !(next % 2)) {
        // push num and dash
        result.push(curr + '-')
      // if first char and next is odd
      } else if(prev == null && next % 2) {
        result.push(curr)
      // if odd and last char OR is next is also odd
      } else if(next == null || next % 2) {
      result.push('-' + curr)
      // if odd and not first char
      } else {
        result.push('-' + curr + '-')
      }
    // if even
    } else {
      result.push(curr)
    }
  }
  return result.join('')
}

// TEST CASES
console.log(dashatize(274), "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320), "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
console.log(dashatize(NaN), "NaN", "Should return NaN");
console.log(dashatize(0), "0", "Should return 0");
console.log(dashatize(-1), "1", "Should return 1");
console.log(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
console.log(dashatize(92), "9-2", "Should return 9-2");
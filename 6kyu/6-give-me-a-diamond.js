// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Give me a Diamond
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5503013e34137eeeaa001648
*/

/* INSTRUCTIONS

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

*/

/* SOLUTION

*/
function diamond(n){
  if(n % 2 === 0 || n <= 0) return null

  let diamondStr = ''
  let spaceCount, count = n

  while(count >= 1) {
    let newStr = '*'.repeat(count) + '\n'
    if(count === n) {
      diamondStr += newStr
    } else {
      newStr = ' '.repeat(spaceCount) + newStr
      diamondStr =  newStr + diamondStr + newStr
    }
    count -= 2
    spaceCount = (n - count) / 2
  }

  return diamondStr
}

// TEST CASES
console.log(diamond(1), "*\n")
console.log(diamond(3), " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
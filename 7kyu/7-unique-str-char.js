// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Unique string characters
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a262cfb8f27f217f700000b
*/

/* INSTRUCTIONS

DESCRIPTION:
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates

*/

/* SOLUTION

*/
function solve(a,b){
  let result = ''

  for(const char of a) {
    if(!b.includes(char)) result += char
  }

  for(const char of b) {
    if(!a.includes(char)) result += char
  }

  return result
};

// TEST CASES
console.log(solve("xyab","xzca"),"ybzc");
console.log(solve("xyabb","xzca"),"ybbzc");
console.log(solve("abcd","xyz"),"abcdxyz");
console.log(solve("xxx","xzca"),"zca");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Insert dashes
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55960bbb182094bc4800007b
*/

/* INSTRUCTIONS

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

// SOLUTION
function insertDash(num) {
  let numArr = String(num).split('')
  let result = ''

  for(let i = 0; i < numArr.length; i++) {
    result += numArr[i]
    if(numArr[i] % 2 && numArr[i + 1] % 2) {
      result += '-'
    }
  }

  return result
}

// TEST CASES
console.log(insertDash(454793),'4547-9-3');
console.log(insertDash(123456),'123456');
console.log(insertDash(1003567),'1003-567');
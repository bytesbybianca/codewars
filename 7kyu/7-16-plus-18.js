// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
16+18=214
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5effa412233ac3002a9e471d
*/

/* INSTRUCTIONS

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

*/

/* SOLUTION

*/
function add(num1, num2) {
  let sum = ''
  let numStr1 = String(num1).split('').reverse().join('')
  let numStr2 = String(num2).split('').reverse().join('')

  for(let i = 0; i < Math.max(numStr1.length, numStr2.length); i++) {
    let addedNums = 0
    if(numStr1[i]) addedNums += Number(numStr1[i])
    if(numStr2[i]) addedNums += Number(numStr2[i])
    sum = addedNums + sum
  }

  return Number(sum)
}

// TEST CASES
console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(16, 18), 214);
console.log(add(26, 39), 515);
console.log(add(122, 81), 1103);  
console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Max Headroom and JavaScript style
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/52a47dd7e950edabfa000391
*/

/* INSTRUCTIONS

Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

*/

// SOLUTION
function getMax1() {
  var max = {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom'
  }
}

// TEST CASES
console.log(getMax1())
console.log(getMax2())
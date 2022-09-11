// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Sum of numbers from 0 to N
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/
*/

/* INSTRUCTIONS

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

*/

// SOLUTION
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count === 0) return '0=0'
    if(count < 0) return `${count}<0`
    
    let nums = [...Array(count+1).keys()]
    let sum = nums.reduce((a,b) => a+b, 0)
    return nums.join('+') + ' = ' + sum
  };

  return SequenceSum;

})();

// TEST CASES
console.log(SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21")
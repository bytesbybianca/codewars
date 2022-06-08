// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Array Array Array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57eb936de1051801d500008a

/* INSTRUCTIONS

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.



P: a 2-value array (x)
R:
if x includes a number => x repeated as many times as the sum of numbers only
if x doesn't include numbers => 'Void!'
E: if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
P:

*/

// SOLUTION
function explode(x){
  // check if x includes at least one number
  let validScores = x.map(x => typeof x).includes('number')
    // find the sum of the numbers only (score)
  let score = x.filter(x => typeof x == 'number').reduce((acc, c) => acc + c, 0)
    // return an array of subarrays of x, repeated as many times as the sum (score)
  // if x doesn't include a number, return 'Void!'
  return validScores ? Array(score).fill(x) : 'Void!'
}

// TEST CASES
console.log(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
console.log(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
console.log(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
console.log(explode(['a', 'b']), 'Void!');  
console.log(explode(["a", 0]), []); 
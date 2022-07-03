// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Round up to the next multiple of 5
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d


/* INSTRUCTIONS

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

// SOLUTION
function roundToNext5(n){
  let num = n
  while(num % 5 != 0) {
    num++
    if(num % 5 == 0) return num
  }
  return num
}

// TEST CASES
{
  [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
    ([x,exp])=> console.log(roundToNext5(x), exp, `Input: ${x}`))
  }
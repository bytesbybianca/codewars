// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Unique In Order
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54e6533c92449cc251001667


// INSTRUCTIONS
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


// SOLUTION
var uniqueInOrder=function(iterable){
  let arr = []
  if(typeof iterable == 'string') {
    iterable = iterable.split('')
  } 
    iterable.map((num, i) => iterable[i+1] == num ? null : arr.push(num))
  return arr
}

// // TEST CASES
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3])
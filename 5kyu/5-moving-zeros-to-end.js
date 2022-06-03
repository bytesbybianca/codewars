// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Moving Zeros To The End
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52597aa56021e91c93000cb0


// INSTRUCTIONS
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

/*
P: an array of several types of elements
R: the array with the zeroes moved to the end
E:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
P:

*/

// SOLUTION
function moveZeros(arr) {
   let zeroArr = []
   arr.map(x => {
      if(x === 0) zeroArr.push(x)
   })
   let newArr = arr.filter(x => x !== 0)
   zeroArr.map(x => newArr.push(x))
   return !arr.includes(0) ? arr : newArr
 }


// // TEST CASES
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
// console.log(moveZeros(['4', '0',  2, 9,   null, 9, {}, null]), [ '4', '0', 2, 9, null, 9, {}, null ]);
console.log(moveZeros([
   'a', 0,   0, 'b', null,
   'c', 'd', 0, 1,   false,
   0,   1,   0, 3,   [],
   0,   1,   9, 0,   0,
   {},  0,   0, 9
 ]), 
[ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
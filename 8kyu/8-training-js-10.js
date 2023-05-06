// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
8 kyu
Training JS #10: loop statement --for
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5721a78c283129e416000999/
*/

/* INSTRUCTIONS

Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

*/

/* SOLUTION

*/
function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  
  
  return [odd,even];
}

// TEST CASES
console.log(pickIt([1,2]),[[1],[2]]);
console.log(pickIt([1,2,3]),[[1,3],[2]]);
console.log(pickIt([3,2,1]),[[3,1],[2]]);
console.log(pickIt([10,20,30]),[[],[10,20,30]]);
console.log(pickIt([11,21,31]),[[11,21,31],[]]);
console.log(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
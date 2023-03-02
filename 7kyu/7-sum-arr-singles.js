// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Sum of array singles
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59f11118a5e129e591000134
*/

/* INSTRUCTIONS

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

*/

/* SOLUTION

*/
function repeats(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) sum += arr[i]
  }

  return sum
};

// TEST CASES
console.log(repeats([4,5,7,5,4,8]),15);
console.log(repeats([9, 10, 19, 13, 19, 13]),19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
console.log(repeats([5, 10, 19, 13, 10, 13]),24);
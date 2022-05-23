// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of odd numbers
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript


// INSTRUCTIONS
// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


// PREP
// P: row number
// R: sum of the odd numbers in that row
// E: 
  // 1 -->  1
  // 2 --> 3 + 5 = 8
// P:

// SOLUTION
function rowSumOddNumbers(n) {  
  // define triangle array
  let triangle = []
  // define odd number = 1
  let oddNum = 1
  // define row array
  let row = []
  // loop for each row in triangle until row number equals n
  for(rowNum = 1; rowNum <= n; rowNum++) {
    // loop to push odd numbers into row until row length equals row number
    for(oddNum; row.length != rowNum; oddNum += 2) {
      // push odd number into row array 
      row.push(oddNum)
    }
    // push row into triangle
    triangle.push(row)
    // redefine the next row as an empty array
    row = []
  }
  // find the sum of the last row of the triangle
  return triangle[triangle.length - 1].reduce((acc, c) => acc + c, 0)
}


// Codewars solution wow :')

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }


// TEST CASES
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(42), 74088);
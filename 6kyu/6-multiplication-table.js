// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Multiplication table
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08


/* INSTRUCTIONS

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

// SOLUTION
multiplicationTable = function(size) {
  let result = []
  
  for(let i = 1; i <= size; i++) {
    let chunk = [i]
    let nextNum = i
    for(let j = 1; j < size; j++) {
      nextNum = i + chunk[chunk.length-1]
      chunk.push(nextNum)
    }
    result.push(chunk)
  }

  return result
}


// TEST CASES
console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
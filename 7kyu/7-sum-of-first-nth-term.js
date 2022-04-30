// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of the first nth term of Series
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/555eded1ad94b00403000071


// INSTRUCTIONS
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// SOLUTION
function SeriesSum(n) {
  if(n == 0) {
    return '0.00'
  } else {
    let series = []
    let denominator = 1
    for(let i = 1; i <= n; i++) {
      series.push(1/denominator)
      denominator += 3
    }
    return series.reduce((acc, c) => acc + c).toFixed(2)
  }
}

// TEST CASES
console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
console.log(SeriesSum(0), "0.00")
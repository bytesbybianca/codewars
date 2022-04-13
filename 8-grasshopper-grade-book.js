// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Grasshopper - Grade book
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5


// INSTRUCTIONS
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// SOLUTION

function getGrade (s1, s2, s3) {
    let avg = (s1+s2+s3)/3
    if(avg >= 90 && avg <= 100) {
        return 'A'
    } else if(avg >= 80 && avg < 90) {
        return 'B'
    } else if(avg >= 70 && avg < 80) {
        return 'C'
    } else if(avg >= 60 && avg < 70) {
        return 'D'
    } else {
        return 'F'
    }
  }


// // TEST CASES
console.log(getGrade(95,90,93), 'A')
console.log(getGrade(100,85,96), 'A')
console.log(getGrade(92,93,94), 'A')

console.log(getGrade(70,70,100), 'B')
console.log(getGrade(82,85,87), 'B')
console.log(getGrade(84,79,85), 'B')
console.log(getGrade(89,89,90), 'B') 

console.log(getGrade(70,70,70), 'C')
console.log(getGrade(75,70,79), 'C')
console.log(getGrade(60,82,76), 'C')

console.log(getGrade(65,70,59), 'D')
console.log(getGrade(66,62,68), 'D')
console.log(getGrade(58,62,70), 'D')

console.log(getGrade(44,55,52), 'F')
console.log(getGrade(48,55,52), 'F')
console.log(getGrade(58,59,60), 'F')
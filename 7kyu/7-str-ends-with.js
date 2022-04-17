// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// String ends with?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d


// INSTRUCTIONS
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// SOLUTION
function solution(str, ending){
  return ending === '' ? true : str.split('').slice(-ending.length).join('') === ending
}


// // TEST CASES
console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
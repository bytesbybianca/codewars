// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reversed Strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018


// INSTRUCTIONS
// Complete the solution so that it reverses the string passed into it.


// SOLUTION

function solution(str){
  return str.split('').reverse().join('')
}

// TEST CASES
console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');



// CODE WARS BEST PRACTICE SOLUTION

// function solution(str){
//   return str.split('').reverse().join('');  
// }
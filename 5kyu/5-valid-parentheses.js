// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Valid Parentheses
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52774a314c2333f0a7000688


/* INSTRUCTIONS

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

// SOLUTION
function validParentheses(parens) {
  // create an array for checking pairs
  let arr = []
  // loop through each character to check
  for(let i = 0; i < parens.length; i++) {
      // define last character
      let lastChar = arr[arr.length -1]
      if(parens[i] == '('){
          // push opening brackets to arr
          arr.push(parens[i])
      } else if(parens[i] == ')' && lastChar == '(') {
          // if a closing bracket, check if paired with last character, pop from array
          arr.pop()
      } else {
          return false
      }
      // else, return false
  }    
  // return true if array is empty
  return arr.length ? false : true
}

// TEST CASES
console.log(validParentheses( "(" ), false);
console.log(validParentheses( ")" ), false);
console.log(validParentheses( "" ), true);
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "(())((()())())" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( "()))" ), false);
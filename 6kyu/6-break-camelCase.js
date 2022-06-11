// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Break camelCase
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5208f99aee097e6552000148


// INSTRUCTIONS
// Complete the solution so that the function will break up camel casing, using a space between words.

// PREP
// P: a string empty or filled with either camel casing or not
// R: empty strings => empty strings,
    // camel casing => words separated by space
    // no camel casing => return as is
// E:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// P:

// SOLUTION
function solution(string) {
      // split to each character
  return string.split('')
  // check if capital
  .map((x, i) => x === x.toUpperCase() ? ` ${x}` : x)
  .join('')
}

// // TEST CASES
console.log(solution('camelCasing'), 'camel Casing')
console.log(solution('camelCasingTest'), 'camel Casing Test')
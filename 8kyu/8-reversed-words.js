// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reversed Words
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e


// INSTRUCTIONS
// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// SOLUTION
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

// // TEST CASES
console.log(reverseWords("hello world!"), "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
console.log(reverseWords("foobar"                       ),  "foobar")
console.log(reverseWords("kata editor"                  ),  "editor kata")
console.log(reverseWords("row row row your boat"        ),  "boat your row row row")
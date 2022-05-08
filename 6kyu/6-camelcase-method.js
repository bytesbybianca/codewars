// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// CamelCase Method
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/587731fda577b3d1b0001196


// INSTRUCTIONS
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord


// SOLUTION
String.prototype.camelCase=function(){
  if (this.length == 0) return this.toString()
  let wordArr = this.split(' ').filter(el => el.length)
  let str = ''
  for(i = 0; i < wordArr.length; i++) {
    str +=  wordArr[i][0].toUpperCase() + wordArr[i].slice(1)
  }
  return str
}

// // TEST CASES
console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
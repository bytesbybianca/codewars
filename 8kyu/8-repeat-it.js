// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// repeatIt
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/557af9418895e44de7000053


// INSTRUCTIONS
// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// SOLUTION
var repeatIt = function(str, n) {
// P: str/not a string, n
// R: str > repeat str n times / not a string "Not a string"
// E: "Hi", 2 --> "HiHi"
// P: conditional str length > repeat method on str n number of times
// conditional else > "Not a String"
  return str.length ? str.repeat(n) : "Not a String"
}


// TEST CASES
console.log(repeatIt("*",3), "***")
console.log(repeatIt("Hello",11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello")
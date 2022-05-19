// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Simple Fun #176: Reverse Letter
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b


// INSTRUCTIONS
// Given a string str, reverse it omitting all non-alphabetic characters.

// PREP
// P: string
// R: string withouth non-alphabetic characters and reversed
// E: 
  // For str = "krishan", the output should be "nahsirk".
  // For str = "ultr53o?n", the output should be "nortlu".

// P:

// SOLUTION
function reverseLetter(str) {
  return str.split('').filter(x => x.toLowerCase() !== x.toUpperCase()).reverse().join('')
}



// // TEST CASES
console.log(reverseLetter("krishan"),"nahsirk")
console.log(reverseLetter("ultr53o?n"),"nortlu")
console.log(reverseLetter("ab23c"),"cba")
console.log(reverseLetter("krish21an"),"nahsirk")
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Alternate capitalization
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// INSTRUCTIONS
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// MY SOLUTION
function capitalize(s){
  return [s.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x).join(''), s.split('').map((x, i) => i % 2 !== 0 ? x.toUpperCase() : x).join('')]
};

// TEST CASES
console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
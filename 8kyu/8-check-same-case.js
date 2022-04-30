// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Check same case
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b


// INSTRUCTIONS
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// SOLUTION
function sameCase(a, b){
  return a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase() ? -1 :
  a.toUpperCase() === a && b.toUpperCase() === b || a.toLowerCase() === a && b.toLowerCase() === b ? 1 : 0
}

// TEST CASES
console.log(sameCase('C', 'B'), 1);
console.log(sameCase('b', 'a'), 1);
console.log(sameCase('d', 'd'), 1);
console.log(sameCase('A', 's'), 0);
console.log(sameCase('c', 'B'), 0);
console.log(sameCase('b', 'Z'), 0);
console.log(sameCase('\t', 'Z'), -1);
console.log(sameCase('H', ':'), -1);
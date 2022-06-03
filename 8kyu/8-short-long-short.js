// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Short Long Short
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/50654ddff44f800200000007


// INSTRUCTIONS
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

/*
P: 2 strings of different lengths. May be empty
R: 1 string in the order of short+long+short
E:
   ("1", "22") --> "1221"
   ("22", "1") --> "1221"
P:
*/


// SOLUTION
function solution(a, b){
   return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
 }
 

// // TEST CASES
console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');
console.log(solution('', 'False'), 'False');
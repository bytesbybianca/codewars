// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Maximum Length Difference
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5663f5305102699bad000056


// INSTRUCTIONS
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// SOLUTION


function mxdiflg(a1, a2) {
  if(a1.length == 0 || a2.length == 0) {
    return -1
  } 
  let a1Lengths = a1.map((string) => (string.length))
  let a2Lengths = a2.map((string) => (string.length))
  let absDiff = []
  a1Lengths.map((num1) => {
    a2Lengths.map((num2) => absDiff.push((Math.abs(num1 - num2))))
  })
  return Math.max(...absDiff)
}


// // TEST CASES
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
var s3 = [];
var s4 = [];
console.log(mxdiflg(s1, s2), 13);
console.log(mxdiflg(s3, s4), -1);
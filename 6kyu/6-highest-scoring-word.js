// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Highest Scoring Word
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


// INSTRUCTIONS
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// PREP
// P: string of words
// R: return the one highest scoring word
// E: 'man i need a taxi up to ubud', 'taxi'
// P:

// SOLUTION
function high(x){
  // split the strings to an array of words
  let words = x.split(' ')
  // split words into sub arrays
  let subArr =  words.map(word => Array.from(word))
  // loop through sub array and find letter score
  let pointsArr = subArr.map(sub => sub.map(letter => letter.charCodeAt()-96))
  // add up total score of word
  let sums = pointsArr.map(sub => sub.reduce((acc,c) => acc + c, 0))
  // find highest score
  let winner = Math.max(...sums)
  // find index of highest score
  let winnerIndex = sums.indexOf(winner)
  // return word with index of highest score
  return words[winnerIndex]
}


// TEST CASES
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
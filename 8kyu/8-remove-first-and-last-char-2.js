// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove First and Last Character Part Two
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/570597e258b58f6edc00230d


// INSTRUCTIONS
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


// SOLUTION

function array(arr){
  let newArr = arr.split(',').slice(1,-1).join(' ')
  return newArr.length > 0 ? newArr : null
}
  




// TEST CASES
console.log(array('1,2,3'), 'return 2');
console.log(array('1,2,3,4'), 'return 2 3');
console.log(array('1,2,3,4,5'), 'return 2 3 4');
console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1,2'), null);
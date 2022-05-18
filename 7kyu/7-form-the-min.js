// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Form The Minimum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca


// INSTRUCTIONS
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// PREP
// P: an array of numbers => Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// R: only unique numbers => the minimum number you can create
// E:
  // minValue ({1, 3, 1})  ==> return (13)
  // minValue({5, 7, 5, 9, 7})  ==> return (579)
  // minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// P:

// SOLUTION
function minValue(values){
  // find unique values
  return Number([...new Set (values)]
  // sort in ascending order
          .sort((a, b) => a-b)
  // join numbers
          .join(''))
}



// // TEST CASES
console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
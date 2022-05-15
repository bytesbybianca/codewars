// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sort arrays - 1
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51f41b98e8f176e70d0002a8


// INSTRUCTIONS
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// SOLUTION
sortme = function( names ){
  return names.sort()
}


// TEST CASES
console.log(sortme(['one', 'two', 'three' ]), ["one", "three", "two"])
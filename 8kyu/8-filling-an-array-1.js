// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Filling an array (part 1)
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/571d42206414b103dc0006a1

// INSTRUCTIONS
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


// MY SOLUTION
const arr = N => {
  let newArr = []
  for(i = 0; i < N; i++) {
    newArr.push(i)
  }
  return newArr
};

// TEST CASES
console.log(arr(), []);
console.log(arr(4), [0,1,2,3]);
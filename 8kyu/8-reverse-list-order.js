// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reverse List Order
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b


// INSTRUCTIONS
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// SOLUTION
function reverseList(list) {
  return list.reverse()
}

// TEST CASES
console.log(reverseList([1,2,3,4]), [4,3,2,1]);
console.log(reverseList([3,1,5,4]), [4,5,1,3]);
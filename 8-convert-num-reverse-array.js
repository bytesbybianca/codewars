// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Convert number to reversed array of digits
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051


// INSTRUCTIONS
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// SOLUTION

function digitize(n) {
  let newArr = n.toString().split('').reverse()
  for(i = 0; i < newArr.length; i++) {
    newArr[i] = Number(newArr[i])
  }
  return newArr
}

// TEST CASES
console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);



// CODE WARS BEST PRACTICE SOLUTION

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
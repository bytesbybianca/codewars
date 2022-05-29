// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Credit Card Mask
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5412509bd436bd33920011bc


// INSTRUCTIONS
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"


// SOLUTION
function maskify(cc) {
  // if string length is 4 or less, return string
  return cc.length <= 4 ? cc :
  // if string length is more than 4
    // split string to each character
    cc.split('')
    // loop through and replace each character with #
      .map(x => '#')
    // slice 0, -4
      .slice(0, -4)
    // join
      .join('')
    // concatenate original string slice -4
      + cc.slice(-4)
}


// // TEST CASES
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
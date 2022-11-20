// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Rot13
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/530e15517bc88ac656000716
*/

/* INSTRUCTIONS

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

// SOLUTION
function rot13(message){
  let result = ''
  // uppercase 65 - 90
  // lowercase 97 - 122
  // loop through string
  for(letter of message) {
    let charCode = letter.charCodeAt()
    // if uppercase, use uppercase alpha, else, use lowercase
    if(charCode >= 65 && charCode <= 90) {
      // if letter in alphabet + 13 > alphabet end, return difference
      if(charCode + 13 <= 90) {
        result += String.fromCharCode(charCode + 13)
      } else {
        result += String.fromCharCode(charCode + 13 - 90 + 64)
      }
    } else if(charCode >= 97 && charCode <= 122) {
      if(charCode + 13 <= 122) {
        result += String.fromCharCode(charCode + 13)
      } else {
        result += String.fromCharCode(charCode + 13 - 122 + 96)
      }
    // if not alpha char, use char as is
    } else {
      result += letter
    }
  }
  return result
}

// TEST CASES
let input = "test"
let expected = "grfg"
console.log(rot13(input), expected)

input = "Test"
expected = "Grfg"
console.log(rot13(input), expected)

input = "Ruby is cool!"
expected = "Ehol vf pbby!"
console.log(rot13(input), expected)

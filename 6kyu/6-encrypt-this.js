// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Encrypt this!
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5848565e273af816fb000449
*/

/* INSTRUCTIONS

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

/* SOLUTION
string
string each word => [ASCII][last char][...][second char]
*/
var encryptThis = function(text) {
  let newStr = ''
  let newWord = ''
  // split string by spaces
  let strArr = text.split(' ')
  
  for(const word in strArr) {
    const arrWord = strArr[word]
    for(let i = 0; i < arrWord.length; i++) {
      // replace first letter with ASCII
      if(i == 0) {
        newWord += arrWord[i].charCodeAt()
      // if length of word >= 3, switch second and last char
      } else if(arrWord.length >= 3 && i === 1) {
          newWord += arrWord[arrWord.length - 1]
      } else if(arrWord.length >= 3 && i === arrWord.length - 1) {
          newWord += arrWord[1]
      } else {
        newWord += arrWord[i]
      }
      // reset
      if(i === arrWord.length - 1) {
        newStr += ' ' + newWord
        newWord = ''
      }
    }
  }

  return newStr.trim()
}

// TEST CASES
console.log(encryptThis("A"), "65");
console.log(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    
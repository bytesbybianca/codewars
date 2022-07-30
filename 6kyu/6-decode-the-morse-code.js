// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Decode the Morse code
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/54b724efac3d5402db00065e


/* INSTRUCTIONS

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

*/

// SOLUTION
decodeMorse = function(morseCode){
  let converted = morseCode.trim().split(' ').map(x => MORSE_CODE[x])
  let words = []
  let letters = []
  for(let i = 0; i < converted.length; i++) {
    if(converted[i] !== undefined) {
      letters.push(converted[i])
      if(i === converted.length - 1) {
        words.push(letters.join(''))
      }
    } else {
      words.push(letters.join(''))
      letters = []
    }
  }
  return words.filter(x => x.length).join(' ')
}

// TEST CASES
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
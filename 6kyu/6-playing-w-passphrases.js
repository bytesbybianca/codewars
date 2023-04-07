// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Playing with passphrases
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/559536379512a64472000053
*/

/* INSTRUCTIONS

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

*/

/* SOLUTION

*/
function playPass(s, n) {
  let result = ''
  let resultReversed = ''
  for(let i = 0; i < s.length; i++) {
    let charCodeLower = s[i].toLowerCase().charCodeAt()
    let charCode = s[i].charCodeAt()
    // letters circular shift n
    if(charCodeLower >= 97 && charCodeLower <= 122) {
      let shift = s[i].charCodeAt() + n
      if(shift > 122) {
        shift = shift % 97 % 26 + 97
      } else if(shift > 90) {
        shift = shift % 65 % 26 + 65
      }
      // downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
      i % 2 === 0 ? result += String.fromCharCode(shift).toUpperCase() : result += String.fromCharCode(shift).toLowerCase()
    // replace digits by its complement to 9
    } else if(charCode >= 48 && charCode <= 57) {
      result += 9 - Number(s[i])
    } else {
      result += s[i]
    }
  }

  for(let i = result.length - 1; i >= 0; i--) {
    resultReversed += result[i]
  }
  return resultReversed
}

// TEST CASES
// console.log(playPass("BORN IN 2015!", 1), "!4897 Oj oSpC")
// console.log(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")
// console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
//     "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
// console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
//     "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
console.log(playPass("TO BE HONEST WITH YOU I DON'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.", 5), 
    ".ySjWjKkNi jWf xIjJs wZtD JgDfR ...dJm yZg sJyKt tTy qTtY YcJy xNmY JxZ Y\'StI N ZtD MyNb yXjStM Jg tY")
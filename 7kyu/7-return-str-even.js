// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Return a string's even characters.
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/566044325f8fddc1c000002c


/* INSTRUCTIONS

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

*/

/* PREP
string
return an array of the string's even characters
return "invalid string" if the string is less than 2 characters long

*/

// SOLUTION
function evenChars(string) {
  if(string.length < 2 || string.length > 100) return "invalid string"
  let result = []

  for(let i = 0; i < string.length; i++) {
    if(i % 2) {
      result.push(string[i])
    }
  }

  return result
}

// TEST CASES
console.log(evenChars ("1234"), ["2", "4"])
console.log(evenChars (";;;--"), [";", "-"])
console.log(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
console.log(evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"), "invalid string")
console.log(evenChars ("a"), "invalid string")
console.log(evenChars (""), "invalid string")
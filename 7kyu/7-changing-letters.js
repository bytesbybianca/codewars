// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Changing letters
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5831c204a31721e2ae000294
*/

/* INSTRUCTIONS

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/
/* SOLUTION

*/
function swap (string) {
  const vowels = 'aeiou'
  let result = ''
  for(const letter of string) {
    if(vowels.includes(letter)) {
      result += letter.toUpperCase()
    } else {
      result += letter
    }
  }
  return result
}

// TEST CASES
console.log(swap(""), "");
console.log(swap("   @@@"), "   @@@");
console.log(swap("HelloWorld!"), "HEllOWOrld!");
console.log(swap("Sunday"), "SUndAy");
console.log(swap("Codewars"), "COdEwArs");
console.log(swap("Monday"), "MOndAy");
console.log(swap("Friday"), "FrIdAy");
console.log(swap("abracadabra"), "AbrAcAdAbrA");
console.log(swap("AbrAcAdAbrA"), "AbrAcAdAbrA");
console.log(swap("ABRACADABRA"), "ABRACADABRA");
console.log(swap("aBRaCaDaBRa"), "ABRACADABRA");
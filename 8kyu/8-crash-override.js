// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Crash Override
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
*/

/* INSTRUCTIONS
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
*/

// SOLUTION
function aliasGen(fName, lName){
  fName = fName[0].toUpperCase() + fName.slice(1)
  lName = lName[0].toUpperCase() + lName.slice(1)
  if((fName[0].charCodeAt() >= 65 && fName[0].charCodeAt() <= 90) && (lName[0].charCodeAt() >= 65 && lName[0].charCodeAt() <= 90)) {
    return firstName[fName[0]] + ' ' + surname[lName[0]]
  } else {
    return 'Your name must start with a letter from A - Z.'
  }
}

// TEST CASES         
console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");
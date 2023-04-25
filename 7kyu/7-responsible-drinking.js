// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Responsible Drinking
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5aee86c5783bb432cd000018
*/

/* INSTRUCTIONS

Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

*/

/* SOLUTION

*/
function hydrate(s) {
  let drinkCount = 0
  for(const char of s) {
    if(char.charCodeAt() >= 48 && char.charCodeAt() <= 57) drinkCount++
  }

  return `${drinkCount} ${drinkCount >= 2 ? 'glasses' : 'glass'} of water`
}

// TEST CASES
console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
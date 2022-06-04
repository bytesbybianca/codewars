// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// The Hashtag Generator
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52449b062fb80683ec000024


// INSTRUCTIONS
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


/*
P: a string, may be empty
R: if empty string, return false
if str.length >= 139, return false
# + Title case string
E:
   " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
   "    Hello     World   "                  =>  "#HelloWorld"
   ""                                        =>  false
P:
*/

// SOLUTION
function generateHashtag (str) {
   // if empty string or str.length >= 139, return false
   if(!str.trim().length || str.split('').filter(x => x != ' ').join('').length > 139) return false
   // else, make str lowercase
   let splitStr = str.toLowerCase()
   // split str to each word
   .split(' ').filter(x => x.toUpperCase() != x.toLowerCase())
   // for each element, return x[0] capitalized, then the rest of the word
   return `#${splitStr.filter(x => x.length).map(x => x[0].toUpperCase() + x.slice(1)).join('')}`

}

// // TEST CASES
console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)), false, "Too long")
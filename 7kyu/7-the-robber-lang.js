// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// The Robber Language
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d


/* INSTRUCTIONS

The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

Example
In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
Note: The dashes - in the example are added for readability and should not be included in the output.

The Assignment
Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

Notes
Only consonants should be modified; leave all other characters unchanged.
Both upper and lower case characters will be tested.
The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
Testing
The tests will challenge your function with sentences of length 0-255, ASCII characters between 32-126 and nothing else.

*/

// SOLUTION
function robberEncode(sentence) {
    // define consonants
    let consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
    // split and map through string
    return sentence.split('').map(x => 
        x.toLowerCase() == x.toUpperCase() ? x :
        // if character is included in consonants, return character with "o + character"
        consonants.includes(x) ? x + 'O' + x :
        consonants.toLowerCase().includes(x) ? x + 'o' + x : x
    ).join('')
  }

// TEST CASES
console.log(robberEncode("hello world"), "hohelollolo wowororloldod");
console.log(robberEncode("coding is fun"), "cocododinongog isos fofunon");
console.log(robberEncode("follow the white rabbit"), "fofolollolowow tothohe wowhohitote rorabobbobitot");
console.log(robberEncode("S.O.S"), "SOS.O.SOS");
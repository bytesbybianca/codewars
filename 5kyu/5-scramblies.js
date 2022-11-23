// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Scramblies
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55c04b4cc56a697bb0000048
*/

/* INSTRUCTIONS

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

// SOLUTION
function scramble(str1, str2) {
  let letterCount = {}

  for (const letter of str2) {
    if (letterCount[letter]) { 
      letterCount[letter]++ 
    } else {
      letterCount[letter] = 1
    }
  }

  for (const letter of str1) {
    if (letterCount[letter] && letterCount[letter] > 0) {
      letterCount[letter]--
    } 
  }

  for (const key in letterCount) {
    if (letterCount[key] !== 0) return false
  }

  return true
}


// TIMES OUT
// function scramble(str1, str2) {
//   let split1 = str1.split('')
//   let split2 = str2.split('')
//   for(let i = 0; i < split2.length; i++) {
//     if(split2.filter(x => x === split2[i]).length > split1.filter(x => x === split2[i]).length) {
//       return false
//     }
//   }
//   return true;
// }


// TEST CASES
console.log(scramble('rkqodlw',           'world'      ), true );
// console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
// console.log(scramble('katas',             'steak'      ), false);
// console.log(scramble('scriptjavx',        'javascript' ), false);
// console.log(scramble('scriptingjava',     'javascript' ), true );
// console.log(scramble('scriptsjava',       'javascripts'), true );
// console.log(scramble('javscripts',        'javascript' ), false);
// console.log(scramble('jscripts',          'javascript' ), false);
// console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
// console.log(scramble('commas',            'commas'     ), true );
// console.log(scramble('sammoc',            'commas'     ), true )

// let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
// let s2 = "zyxcba".repeat(9_000);
// console.log(scramble(s1, s2), true);
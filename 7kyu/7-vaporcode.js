// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
V A P O R C O D E
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5966eeb31b229e44eb00007a
*/

/* INSTRUCTIONS

ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

*/

/* SOLUTION

*/
function vaporcode(string) {
  let result = ""
  for(let i = 0; i < string.length; i++) {
    if(i === 0) {
      result += string[i]
    } else {
      result += `  ${string[i]}`
    }
  }

  return result
}

// TEST CASES
console.log(vaporcode("Lets go to the movies"),"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isnt my code working"),"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
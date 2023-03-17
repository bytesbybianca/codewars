// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Caffeine Script
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5434283682b0fdb0420000e6
*/

/* INSTRUCTIONS

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"

*/

/* SOLUTION

*/
function caffeineBuzz(n){
  let result = ''
  if (n % 12 === 0) {
    result += 'Coffee'
  } else if (n % 3 === 0) {
    result += 'Java'
  } 
  if(result && n % 2 === 0) result += 'Script'
  if(!result) result += 'mocha_missing!'

  return result
}

// TEST CASES
console.log( caffeineBuzz( 1 ), "mocha_missing!" );
console.log( caffeineBuzz( 3 ), "Java" );
console.log( caffeineBuzz( 6 ), "JavaScript" );
console.log( caffeineBuzz( 12 ), "CoffeeScript" );
console.log( caffeineBuzz( 4 ), "mocha_missing!" );
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Make the Deadfish Swim
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/51e0007c1f9378fa810002a9
*/

/* INSTRUCTIONS

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

/* SOLUTION

*/
// Return the output array, and ignore all non-op characters
function parse( data ) {
  let result = []
  let num = 0
  for(const char of data) {
    if(char === 'i') {
      num++
    } else if(char === 'd') {
      num--
    } else if(char === 's') {
      num = num**2
    } else if(char === 'o') {
      result.push(num)
    }
  }

  return result
}


// TEST CASES
console.log( parse("iiisdoso"), [ 8, 64 ] );
console.log( parse("iiisxxxdoso"), [ 8, 64 ] );
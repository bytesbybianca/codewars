// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Cat and Mouse - Easy Version
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57ee24e17b45eff6d6000164
*/

/* INSTRUCTIONS

You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

*/
/* SOLUTION

*/
function catMouse(x){
  let jumps = ''
  for(const char of x) {
    if(char === '.') {
      jumps += char
    }
  }
  return jumps.length <= 3 ? "Caught!" : "Escaped!"
}

// TEST CASES
console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");
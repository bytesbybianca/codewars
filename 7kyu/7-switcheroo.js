// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Switcheroo
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57f759bb664021a30300007d
*/

/* INSTRUCTIONS

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

// SOLUTION
function switcheroo(x){
  return x.split('').map(x => x === 'a' ? 'b' :
  x === 'b' ? 'a' : x).join('')
}

// TEST CASES
console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');    
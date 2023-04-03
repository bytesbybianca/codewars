// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Indexed capitalization
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
*/

/* INSTRUCTIONS

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

*/

/* SOLUTION

*/
function capitalize(s,arr){
  let result = ''
  for(let i = 0; i < s.length; i++) {
    if(arr.includes(i)) {
      result += s[i].toUpperCase()
    } else {
      result += s[i]
    }
  }

  return result
};

// TEST CASES
console.log(capitalize("abcdef",[1,2,5]),'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
console.log(capitalize("codewarriors",[5]),'codewArriors');
console.log(capitalize("indexinglessons",[0]),'Indexinglessons');
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Tidy Number (Special Numbers Series #9)
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a87449ab1710171300000fd
*/

/* INSTRUCTIONS

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

*/
/* SOLUTION

*/
function tidyNumber(n){
  for(let i = 0; i < String(n).length - 1; i++) {
    if(String(n)[i] > String(n)[i+1]) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(tidyNumber(12),true);
console.log(tidyNumber(102),false);
console.log(tidyNumber(9672),false);
console.log(tidyNumber(2789),true);
console.log(tidyNumber(2335),true);
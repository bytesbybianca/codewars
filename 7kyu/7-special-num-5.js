// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Special Number (Special Numbers Series #5)
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a55f04be6be383a50000187
*/

/* INSTRUCTIONS

Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .

specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .

specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .

specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"

*/

/* SOLUTION

*/
function specialNumber(n){
  const digits = '012345'
  for(let num of String(n)) {
    if(!digits.includes(String(num))) return "NOT!!"
  }

  return "Special!!"
}

// TEST CASES
console.log(specialNumber(2),"Special!!");
console.log(specialNumber(3),"Special!!");
console.log(specialNumber(6),"NOT!!");
console.log(specialNumber(9),"NOT!!");
console.log(specialNumber(11),"Special!!");
console.log(specialNumber(55),"Special!!");
console.log(specialNumber(26),"NOT!!");
console.log(specialNumber(92),"NOT!!");
console.log(specialNumber(25432),"Special!!");
console.log(specialNumber(2783),"NOT!!");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Strong Number (Special Numbers Series #2)
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5a4d303f880385399b000001
*/

/* INSTRUCTIONS

Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .

*/

/* SOLUTION
number
str => strong / not strong
strong => the sum of the factorial of each digit equals n
*/
function strong(n) {
  let sum = 0
  // loop through all digits and find the factorial
  for(const digit of n.toString()) {
    let num = Number(digit)
    let fact = 1
    while(num) {
      fact *= num
      num--
    } 
    sum += fact
  }
  // get the sum
  // check if strong
  return sum === n ? "STRONG!!!!" : "Not Strong !!"
}

// TEST CASES
console.log(strong(1), "STRONG!!!!");
console.log(strong(2), "STRONG!!!!");
console.log(strong(145), "STRONG!!!!");
console.log(strong(7), "Not Strong !!");
console.log(strong(93), "Not Strong !!");
console.log(strong(185), "Not Strong !!");
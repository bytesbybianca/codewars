// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Triple trouble
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55d5434f269c0c3f1b000058
*/

/* INSTRUCTIONS

Write a function

triples(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

*/

/* PREP 
P: 2 numbers - num1, num2
R: 0 or 1
1 if there are three of the same consecutive numbers in num1 AND 2 of the same consecutives numbers in num 2
otherwise, return 0
E: 

Examples
triples(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

triples(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

triples(12345, 12345) == 0

triples(666789, 12345667) == 1

*/

// SOLUTION
function tripledouble(num1, num2) {
  // define array to store booleans
  let triples = []
  // make num1 a string, split num1
  let splitNum1 = num1.toString().split('')
  let splitNum2 = num2.toString().split('')
  // counter starts at 1
  let counter = 1
  // for loop through the split string
  for(let i = 0; i < splitNum1.length; i++) {
      // while loop - the next character equals current character
      while(splitNum1[i] === splitNum1[i + 1]) {
        // increase counter and index by 1
        counter++
        i++
      }
      // counter == 3, push num into array
      if(counter >= 3) {
        triples.push(splitNum1[i])
      }
      // redefine counter to restart at 1
      counter = 1
  }
  // repeat for num2
  // for loop through the split string
  for(let i = 0; i < splitNum2.length; i++) {
    // while loop - the next character equals current character
    while(splitNum2[i] === splitNum2[i + 1]) {
      // increase counter and index by 1
      counter++
      i++
    }
    // counter == 3 && array includes num, push true into array
    if(counter >= 2 && triples.includes(splitNum2[i])) {
      return 1
    }
    // redefine counter to restart at 1
    counter = 1
  }
  // return 1 if array length === 2, else return 0
  return 0
}

// TEST CASES
console.log(tripledouble(451999277,41177722899),1);
console.log(tripledouble(1222345, 12345),0);
console.log(tripledouble(12345, 12345),0);
console.log(tripledouble(666789, 12345667),1);
console.log(tripledouble(10560002, 100),1);
console.log(tripledouble(1112, 122),0);
console.log(tripledouble(15625167775888, 1351264988),1);
console.log(tripledouble(7334612888888999, 468521688),1);
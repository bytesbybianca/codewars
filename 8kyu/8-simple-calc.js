// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
simple calculator
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5810085c533d69f4980001cf/
*/

/* INSTRUCTIONS
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.



*/

// SOLUTION
function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    if(sign === '+') return a + b 
    if(sign === '-') return a - b 
    if(sign === '*') return a * b 
    if(sign === '/') return a / b 
  }
  return 'unknown value'
}

// TEST CASES         
console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");   
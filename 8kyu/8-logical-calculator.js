// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Logical calculator
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57096af70dad013aa200007b


// INSTRUCTIONS
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).


// SOLUTION
function logicalCalc(array, op){
  let lastResult = array[0]
  for(let i = 1; i < array.length; i ++) {
    if(op === "AND") {
      if(lastResult === true && array[i] === true) {
        lastResult = true
      } else {
        lastResult = false
      }
    } else if(op === "OR") {
      if(lastResult === true || array[i] === true) {
        lastResult = true
      } else {
        lastResult = false
      }
    } else if(op === "XOR") {
      if(lastResult === true && array[i] === true) {
        lastResult = false
      } else if(lastResult === true || array[i] === true) {
        lastResult = true
      }
    }
  }

  return lastResult
}


// // TEST CASES
// console.log(logicalCalc([true, true, true, false], "AND"), false);
// console.log(logicalCalc([true, true, true, false], "OR"), true);
// console.log(logicalCalc([true, true, true, false], "XOR"), true);
// console.log(logicalCalc([true, true, false, false], "AND"), false);
// console.log(logicalCalc([true, true, false, false], "OR"), true);
// console.log(logicalCalc([true, true, false, false], "XOR"), false);
// console.log(logicalCalc([true, false, false, false], "AND"), false);
// console.log(logicalCalc([true, false, false, false], "OR"), true);
// console.log(logicalCalc([true, false, false, false], "XOR"), true);
console.log(logicalCalc([true, true], "AND"), true);
console.log(logicalCalc([true, true], "OR"), true);
console.log(logicalCalc([true, true], "XOR"), false);
console.log(logicalCalc([false, false], "AND"), false);
console.log(logicalCalc([false, false], "OR"), false);
console.log(logicalCalc([false, false], "XOR"), false);
console.log(logicalCalc([false], "AND"), false);
console.log(logicalCalc([false], "OR"), false);
console.log(logicalCalc([false], "XOR"), false);
console.log(logicalCalc([true], "AND"), true);
console.log(logicalCalc([true], "OR"), true);
console.log(logicalCalc([true], "XOR"), true);
console.log(logicalCalc([false,false,false,false,false,false,false,false,true,false,true,true,true,true,true,false], "AND"), true);
console.log(logicalCalc([false,false,false,false,false,false,false,false,true,false,true,true,true,true,true,false], "OR"), true);
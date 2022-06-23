// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Training JS #2: Basic data types--Number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/571edd157e8954bab500032d


/* INSTRUCTIONS

In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

*/

// SOLUTION
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3
  var b=v1
  return a-b;
}
function equal3(){
  var a=v1
  var b=v5
  return a*b;
}
function equal4(){
  var a=v4
  var b=v5
  return a/b;
}
function equal5(){
  var a=v6
  var b=v3
  return a%b;
}

// TEST CASES
console.log(equal1(),100,"value of a+b is not equal to 100");
console.log(equal2(),100,"value of a-b is not equal to 100");
console.log(equal3(),100,"value of a*b is not equal to 100");
console.log(equal4(),100,"value of a/b is not equal to 100");
console.log(equal5(),100,"value of a%b is not equal to 100");
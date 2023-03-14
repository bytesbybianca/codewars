// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Unpacking Arguments
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/540de1f0716ab384b4000828
*/

/* INSTRUCTIONS

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")

*/

/* SOLUTION

*/
function spread(func, args) {
  return func(...args)
}

// TEST CASES
console.log( spread(function(x,y){return x+y}, [1,2]), 3 )
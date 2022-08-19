// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
The 'if' function
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/54147087d5c2ebe4f1000805/javascript
*/

/* INSTRUCTIONS

Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

*/

// SOLUTION
function _if(bool, func1, func2) {
  if(bool == true){
    func1()
  } else {
    func2()
  }
}

// TEST CASES
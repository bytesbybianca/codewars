// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
esreveR
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5413759479ba273f8100003d
*/

/* INSTRUCTIONS

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

/* SOLUTION

*/
reverse = function(array) {
  let result = []
  for(let i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }

  return result
}

// TEST CASES
console.log( reverse([1,2,3]), [3,2,1] )
console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )
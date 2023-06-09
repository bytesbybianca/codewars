// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Last
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/541629460b198da04e000bb9
*/

/* INSTRUCTIONS

Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

*/
/* SOLUTION

*/
function last(list){
  let last = arguments[arguments.length - 1]
  return last[last.length - 1] || last
}

// TEST CASES
console.log(last([1,2,3,4,5]), 5);   //-- array
console.log(last("abcde"), "e");     //-- string
console.log(last(1,"b",3,"d",5), 5);//-- arguments
console.log(last({ '0': 'a', '1': 'b', '2': 'c', '3': 'z' }), 'z');
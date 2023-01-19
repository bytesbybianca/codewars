// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sort Arrays (Ignoring Case)
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9


/* INSTRUCTIONS

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

*/

// SOLUTION
sortme = function( names ){
  return names.sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
    if(a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
  })
}


// TEST CASES
console.log(sortme(["Hello","there","I'm","fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortme(["CodeWars"]), ["CodeWars"])
console.log(sortme([]), [])
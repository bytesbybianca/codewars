// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Removing Elements
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2


// INSTRUCTIONS
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// SOLUTION
function removeEveryOther(arr){
  let newArr = []
  arr.map((el, i) => i % 2 === 0 ? newArr.push(el) : false)
  return newArr
}


// // TEST CASES
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
console.log(removeEveryOther(["f","e","t","i","8","z","1","x","e","t","1","v","y","r","l","h","h","9","7","b","o","3","0","2","r","q","x","a","f","0","e","3","y","i","4","v"]),[[ 'f','t','8','1','e','1','y','l','h','7','o','0','r','x','f','e','y','4']]);
console.log(removeEveryOther(["p","4","i","m","m"]),[[ 'p', 'i', 'm' ]]);
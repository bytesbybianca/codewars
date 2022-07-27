// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Enumerable Magic #20 - Cascading Subsets
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/545af3d185166a3dec001190


/* INSTRUCTIONS

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.



*/

// SOLUTION
function eachCons(array, n) {
  let arr = []
  array.forEach((x, i) => {
    let chunk = []
    for(let j = 1; j <= n; j++) {
      chunk.push(array[i])
      i++
    }
    if (!chunk.includes(undefined)) {
      arr.push(chunk)
    }
  });
  return arr
}

// TEST CASES
const lst = [3, 5, 8, 13];
console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
console.log(eachCons(lst, 3), [[3,5,8], [5,8,13]]);
console.log(eachCons([], 3), []);
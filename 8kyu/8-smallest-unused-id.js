// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Smallest unused ID
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55eea63119278d571d00006a


// INSTRUCTIONS
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


// PREP
// P: array of id numbers
// R: return the smallest unused ID (within the array or the next number in the array)
// E: [0,1,2,3,5] => 4
// P:


// SOLUTION
function nextId(ids){
  // sort
  let sorted = ids.sort((a,b) => a-b)
  // compare number to next number => should be a difference of 1
  let beforeUnused = sorted.map((x, i) => sorted[i+1] - x > 1 ? x : null).filter(x => x != null)
  // when condition is not met, return the next number
      return ids[0] !== 0 ? 0 :
      beforeUnused.length ? beforeUnused[0] + 1 : 
  // if none found in array, return last number + 1
      ids[ids.length - 1] + 1
}


// // TEST CASES
console.log(nextId([0,1,2,3,5]), 4);
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
console.log(nextId([ 6, 5, 0, 0, 7, 0, 3, 3 ]), 1);
console.log(nextId([ 5, 8, 9, 9, 3, 7, 3, 3 ]), 0);
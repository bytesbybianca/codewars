// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// A Needle in the Haystack
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c


// INSTRUCTIONS
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


// SOLUTION

function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle')
  return `found the needle at position ${needleIndex}`
}

// TEST CASES
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1), undefined, "Your function didn't return anything");
console.log(findNeedle(haystack_1), 'found the needle at position 3')
console.log(findNeedle(haystack_2), 'found the needle at position 5') 
console.log(findNeedle(haystack_3), 'found the needle at position 30')



// CODE WARS BEST PRACTICE SOLUTION

// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }
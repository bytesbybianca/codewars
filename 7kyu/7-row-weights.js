// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Row Weights
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9


/* INSTRUCTIONS

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/

// SOLUTION
function rowWeights(array){
  // if only one number in array, return [n, 0]
  if(array.length == 1) return [array[0], 0]
  // sum up team one (even nums)
  let teamOne = array.filter((x, i) => i % 2 == 0).reduce((acc, c) => acc + c, 0)
  // sum up team two (odd nums)
  let teamTwo = array.filter((x, i) => i % 2 != 0).reduce((acc, c) => acc + c, 0)
  // return sums in array
  return [teamOne, teamTwo]
}
  



// TEST CASES

console.log('answer:', rowWeights([80]), 
'test case:', [80],
'expected output:', [80,0]);

console.log('answer:', rowWeights([100,50]), 
'test case:', [100,50],
'expected output:', [100,50]);

console.log('answer:', rowWeights([50,60,70,80]), 
'test case:', [50,60,70,80],
'expected output:', [120,140]);

console.log('answer:', rowWeights([13,27,49]), 
'test case:', [13,27,49],
'expected output:', [62,27]);

console.log('answer:', rowWeights([70,58,75,34,91]), 
'test case:', [70,58,75,34,91],
'expected output:', [236,92]);

console.log('answer:', rowWeights([29,83,67,53,19,28,96]), 
'test case:', [29,83,67,53,19,28,96],
'expected output:', [211,164]);

console.log('answer:', rowWeights([0]), 
'test case:', [0],
'expected output:', [0,0]);

console.log('answer:', rowWeights([100,51,50,100]), 
'test case:', [100,51,50,100],
'expected output:', [150,151]);

console.log('answer:', rowWeights([39,84,74,18,59,72,35,61]), 
'test case:', [39,84,74,18,59,72,35,61],
'expected output:', [207,235]);

console.log('answer:', rowWeights([0,1,0]), 
'test case:', [0,1,0],
'expected output:', [0,1]);
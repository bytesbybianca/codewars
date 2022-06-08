// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// The falling speed of petals
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b

/* INSTRUCTIONS

When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0

*/

// SOLUTION
function sakuraFall(v) {
  let branchHeight = 80 * 5
  return v <= 0 ? 0 : branchHeight/v
}

// TEST CASES
console.log(sakuraFall(5),80)
console.log(sakuraFall(10),40)    
console.log(sakuraFall(-1),0)
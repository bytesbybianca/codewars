// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Man in the west
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/
*/

/* INSTRUCTIONS

A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

*/

// SOLUTION
function checkTheBucket(bucket){
  return bucket.includes('gold')
}

// TEST CASES
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
console.log(checkTheBucket([]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);
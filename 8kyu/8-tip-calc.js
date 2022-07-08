// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Tip Calculator
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56598d8076ee7a0759000087


/* INSTRUCTIONS

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.

*/

// SOLUTION
function calculateTip(amount, rating) {
  rating = rating.toLowerCase()
  const tip = {
    'terrible': 0,
    'poor': 5,
    'good': 10,
    'great': 15,
    'excellent': 20,
  }
  for(const key in tip) {
    if(rating == key) return Math.ceil(tip[rating] * .01 * amount)
  } return 'Rating not recognised'
}

// TEST CASES
console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
console.log(calculateTip(26.95, "hi"), 'Rating not recognised');
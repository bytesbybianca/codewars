// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Pete, the baker
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/525c65e51bf619685c000059
*/

/* INSTRUCTIONS

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

*/

/* PREP
P: recipe object with ingredients (keys) and amount (values) and an available object with ingredients (keys) and amount (values)

R: number of cakes that can be made with the available ingredients (the smallest number of times the recipe ingredient is evenly divisble by available ingredient)

*/

// SOLUTION
function cakes(recipe, available) {
  let arr = []
  // if recipe contains an ingredient and isn't available, return 0
  for(const ingredient in recipe) {
    if(!(ingredient in available)) {
      return 0
    } else {
      // divide available ingredient value by recipe
      // round down and store number in array
      arr.push(Math.floor(available[ingredient] / recipe[ingredient]))
    }
  }
  // return smallest number
  return Math.min(...arr)
}

// TEST CASES
let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);
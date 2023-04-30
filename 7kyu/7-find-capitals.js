// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Find the Capitals
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/53573877d5493b4d6e00050c
*/

/* INSTRUCTIONS

Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Examples
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/

/* SOLUTION

*/
function capital(capitals){
  let result = []
  for(const group of capitals) {
    result.push(`The capital of ${group.state ? group.state : group.country} is ${group.capital}`)
  }
  return result
}

// TEST CASES
let state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals)[0], "The capital of Maine is Augusta");

let country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals)[0], "The capital of Spain is Madrid")

let mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
console.log(capital(mixed_capitals)[1], "The capital of Spain is Madrid")
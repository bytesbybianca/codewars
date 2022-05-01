// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Welcome to the City
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5302d846be2a9189af0001e4


// INSTRUCTIONS
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


// SOLUTION
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


// TEST CASES
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'),'Hello, John Smith! Welcome to Phoenix, Arizona!')
console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'),'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
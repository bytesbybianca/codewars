// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Hello, Name or World!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57e3f79c9cb119374600046b


// INSTRUCTIONS
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// SOLUTION
function hello(name) {
  return name && name.length ? `Hello, ${name[0].toUpperCase()+name.slice(1).toLowerCase()}!` : `Hello, World!`;
}

// TEST CASES
console.log(hello('johN'), "You have to return a string instead of logging it to the console");
console.log(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Grasshopper - Debug sayHello
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5625618b1fe21ab49f00001f


// INSTRUCTIONS
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// SOLUTION
function sayHello(name) {
  return `Hello, ${name}`
}

// TEST CASES
console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
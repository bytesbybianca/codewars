// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Grasshopper - Function syntax debugging
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/


// INSTRUCTIONS
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// SOLUTION
function main(verb, noun) {
  return `${verb}${noun}`
}


// TEST CASES
console.log(main('take ', 'item'), 'take item')
console.log(main('use ', 'sword'), 'use sword')
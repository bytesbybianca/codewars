// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Write Number in Expanded Form
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5842df8ccbd22792a4000245


/* INSTRUCTIONS

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/


// SOLUTION
function expandedForm(num) {
  let expanded = []
  let str = num.toString()
  let numLength = num.toString().length
  let places = numLength
  for(let i = 0; i < numLength; i++) {
    if(str[i] !== '0') {
      expanded.push(str[i].padEnd(places, '0'))
    }
    places--
  }
  return expanded.join(' + ')
}

// TEST CASES
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
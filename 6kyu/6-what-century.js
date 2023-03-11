// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
What century is it?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/52fb87703c1351ebd200081f
*/

/* INSTRUCTIONS

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

*/

/* SOLUTION

*/

const ordinalRules = {
  1: 'st',
  2: 'nd',
  3: 'rd'
}

const exceptions = [11, 12, 13]

function whatCentury(year) {
  let century
  const [first, second] = [Number(year.slice(0, 2)), Number(year.slice(2))]
  if(second > 0) {
    century = first + 1 
  } else {
    century = first
  }

  let centuryEnd = century.toString()[1]

  return !ordinalRules[centuryEnd] || exceptions.includes(century) ? century + 'th' : century + ordinalRules[centuryEnd]
}

// TEST CASES
console.log(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
console.log(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
console.log(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
console.log(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
console.log(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
console.log(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
console.log(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");
console.log(whatCentury("2003"), "21st", "With input '2003' solution produced wrong output");
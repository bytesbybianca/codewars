// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Multiplying numbers as strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55911ef14065454c75000062


/* INSTRUCTIONS

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

*/

// SOLUTION
function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString()
}

// TEST CASES
console.log(multiply("2", "3"), "6");
console.log(multiply("30", "69"), "2070");
console.log(multiply("11", "85"), "935");
console.log(multiply("2" ,"0"), "0");
console.log(multiply("0", "30"), "0");
console.log(multiply("0000001", "3"), "3");
console.log(multiply("1009", "03"), "3027");
console.log(multiply("98765", "56894"), "5619135910");
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Subtract big numbers
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55db23c6ab208d61e10000af


/* INSTRUCTIONS

Subtract big numbers passed as strings

Arguments are passed as strings
Result should be returned as string
3 - 2 should return 1 while 2 - 3 should return -1
Zeros should not preceed a number! 02, -02, 0001 are invalid
Very large numbers will be tested
Note: 100 randomly generated tests

*/

// SOLUTION
function subtract(a, b) {
  return (BigInt(a) - BigInt(b)).toString()
}

// TEST CASES
console.log(subtract("2", "3"), "-1");
console.log(subtract("30", "69"), "-39");
console.log(subtract("6", "2"), "4");
console.log(subtract("85", "11"), "74");
console.log(subtract("2" ,"0"), "2");
console.log(subtract("0", "30"), "-30");
console.log(subtract("0000001", "3"), "-2");
console.log(subtract("1009", "03"), "1006");
console.log(subtract("234", "242"), "-8");
console.log(subtract("294", "334"), "-40");
console.log(subtract("98765", "56894"), "41871");
console.log(subtract("1020303004875647366210", "2774537626200857473632627613"), "-2774536605897852597985261403");
console.log(subtract("58608473622772837728372827", "7586374672263726736374"), "58600887248100574001636453");
console.log(subtract("9007199254740991", "9007199254740991"), "0");
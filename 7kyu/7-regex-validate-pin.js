// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Regex validate PIN code
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132


// INSTRUCTIONS
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.


// SOLUTION
function validatePIN (pin) {
  let numbers = '0123456789'
  let split = pin.split('')
  return !split.map(x => numbers.includes(x)).includes(false) && (pin.length === 4 || pin.length === 6)
}


// // TEST CASES
console.log(validatePIN("1"),false);
console.log(validatePIN("12"),false);
console.log(validatePIN("123"),false);
console.log(validatePIN("12345"),false);
console.log(validatePIN("1234567"),false);
console.log(validatePIN("-1234"),false);
console.log(validatePIN("1.234"),false);
console.log(validatePIN("-1.234"),false);
console.log(validatePIN("00000000"),false);
console.log(validatePIN("a234"),false);
console.log(validatePIN(".234"),false);
console.log(validatePIN("1234"),true);
console.log(validatePIN("0000"),true);
console.log(validatePIN("1111"),true);
console.log(validatePIN("123456"),true);
console.log(validatePIN("098765"),true);
console.log(validatePIN("000000"),true);
console.log(validatePIN("123456"),true);
console.log(validatePIN("090909"),true);
console.log(validatePIN('123 '),false);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// The Coupon Code
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/539de388a540db7fec000642


// INSTRUCTIONS
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// SOLUTION
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let currentFormatted = new Date(currentDate)
  let expirationFormatted = new Date(expirationDate)
  return enteredCode === correctCode && currentFormatted <= expirationFormatted
}


// // TEST CASES
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);        
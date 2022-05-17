// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Training JS #7: if..else and ternary operator
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57202aefe8d6c514300001fd


// INSTRUCTIONS
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.


// SOLUTION
function saleHotdogs(n){
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90)
}


// // TEST CASES
console.log(saleHotdogs(1),100);
console.log(saleHotdogs(4),400);
console.log(saleHotdogs(5),475);
console.log(saleHotdogs(9),855);
console.log(saleHotdogs(10),900);
console.log(saleHotdogs(100),9000);
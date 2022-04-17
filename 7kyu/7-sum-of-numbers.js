// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Beginner Series #3 Sum of Numbers
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55f2b110f61eb01779000053


// INSTRUCTIONS
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function getSum( a,b ) {
    if(a === b) return a;
    let sum = 0;
    if(a < b){
     for(; a <= b; a++ ) {
      sum += a
     }
   } else if (a > b){
      for(; b <= a; b++ ) {
      sum += b
     }
  }
    return sum;
  }
  
  
  // Best practice solution
  
  // const GetSum = (a, b) => {
  //   let min = Math.min(a, b),
  //       max = Math.max(a, b);
  //   return (max - min + 1) * (min + max) / 2;
  // }
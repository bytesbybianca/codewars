// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * 
//////////////////////////////////
// Count the divisors of a number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e
//////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * 

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)

function getDivisorsCnt(n){
    let count = 0
    for(let i = 1; i <= n; i++) {
      if(n % i === 0){
        count += 1
      }
    }
    return count
  }
  
  
  // Best practice solution
  
  // function getDivisorsCnt(n) {
  //   for (var d = 0, i = n; i > 0; i--) {
  //     if (n % i == 0) d++;
  //   }
    
  //   return d;
  // }
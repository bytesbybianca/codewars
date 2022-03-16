// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * 
//////////////////////////////////
// String repeat
//////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * 

// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let string = s
    for(let i = 1; i <= n-1; i++) {
      string += s
    }
    return string;
  }
  
  // // Best practice solution
  
  // function repeatStr (n, s) {
  //   return s.repeat(n);
  // }
  
  // // Best practice solution
  
  // repeatStr = (n, s) => s.repeat(n)
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Count characters in your string
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52efefcbcdf57161d4000091


// INSTRUCTIONS
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// SOLUTION
function count (string) {  
   let tally = { }
   string.split('').map(x => {
     !tally[x] ? tally[x] = 1 : tally[x] += 1
   })
   return tally
}

// // TEST CASES
console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});    
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove String Spaces
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5


// INSTRUCTIONS
// Simple, remove the spaces from the string, then return the resultant string.


// SOLUTION

function noSpace(x){
  return x.replace(/ /g, '');
}

// TEST CASES
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 



// CODE WARS BEST PRACTICE SOLUTION

// function noSpace(x){
//   return x.replace(/\s/g, '');
// }
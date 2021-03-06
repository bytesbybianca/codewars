// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Convert boolean values to strings
// 'Yes' or 'No'.
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53369039d7ab3ac506000467


// INSTRUCTIONS
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool) {
    return 'Yes'
  } else {
    return 'No'
  }
}

// Best practice solution

// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }
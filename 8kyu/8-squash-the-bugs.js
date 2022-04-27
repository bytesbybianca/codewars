// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Squash the bugs
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56f173a35b91399a05000cb7


// INSTRUCTIONS
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

// SOLUTION
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

// TEST CASES
console.log(findLongest("The quick white fox jumped around the massive dog"), 7);
console.log(findLongest("Take me to tinseltown with you"), 10); 
console.log(findLongest("Sausage chops"), 7); 
console.log(findLongest("Wind your body and wiggle your belly"), 6); 
console.log(findLongest("Lets all go on holiday"), 7); 
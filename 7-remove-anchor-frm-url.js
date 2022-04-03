// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove anchor from URL
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386


// INSTRUCTIONS
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// SOLUTION

function removeUrlAnchor(url) {
  let anchorIndex = url.indexOf('#')
  return url.includes('#') ? url.slice(0, anchorIndex) : url
}


// TEST CASES
console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com?page=1'), 'www.codewars.com?page=1')
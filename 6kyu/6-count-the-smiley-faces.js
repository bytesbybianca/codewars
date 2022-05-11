// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Count the smiley faces!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/583203e6eb35d7980400002a


// INSTRUCTIONS
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


// SOLUTION
//return the total number of smiling faces in the array
function countSmileys(arr) {
  let eyes = [':', ';']
  let nose = ['-', '~']
  let mouth = [')', 'D']
  let newArr = arr.filter(smiley => smiley.length <= 3 && eyes.includes(smiley[0]) && mouth.includes(smiley[smiley.length-1]))
  return newArr.filter(smiley => smiley.length == 2 || (smiley.length == 3 && nose.includes(smiley[1]))).length
}

// // TEST CASES
console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
console.log(countSmileys([ ':---)', '))', ';~~D', ';D' ]), 1);
console.log(countSmileys([ ':-)', ';~D', ':-D', ':_D' ]), 3);
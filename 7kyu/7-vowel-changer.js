// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Vowel Changer
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/597754ba62f8a19c98000030


// INSTRUCTIONS
// Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

// There will never be an uppercase letter as an input.

// PREP
// P: string and vowel
// R: string with all vowels changed to specified vowel in argument
// E: 
  // For Example (input1, vowel) => output:

  // ("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i') => 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
  // ('adira wants to go to the park', 'o') =>'odoro wonts to go to tho pork'
// P:

// SOLUTION
function vowelChange(str, vow) {
  // define vowels
  let vowels = 'aeiou'
  // split string to isolate each letter
  return str.split('').map(letter => vowels.includes(letter) ? vow : letter).join('')
  // map to determine if letter is a vowel

  // if a vowel, return specified vowel instead

  // join
}


// TEST CASES
console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!",'i'), 'Hinnih Hinnih bi-binnih Binini finni fi-finnih Fii, fy, mi-minnih. Hinnih!');
console.log(vowelChange('adira wants to go to the park', 'o'), 'odoro wonts to go to tho pork');
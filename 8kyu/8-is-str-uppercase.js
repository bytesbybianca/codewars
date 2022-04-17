// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Is the string uppercase?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b


// INSTRUCTIONS
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// SOLUTION
String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this
}


// // TEST CASES
console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
console.log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
console.log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
console.log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
console.log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
console.log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
console.log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
console.log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
console.log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
console.log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
console.log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
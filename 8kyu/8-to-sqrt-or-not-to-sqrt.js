// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// To square(root) or not to square(root)
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/


// INSTRUCTIONS
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.


// SOLUTION

function squareOrSquareRoot(array) {
  return array.map((x) => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : x**2);  
}




// TEST CASES
    var input = [ 4, 3, 9, 7, 2, 1 ];
    var expected = [ 2, 9, 3, 49, 4, 1 ];
    console.log(squareOrSquareRoot(input), expected);
    
    input = [ 100, 101, 5, 5, 1, 1 ];
    expected = [ 10, 10201, 25, 25, 1, 1 ];
    console.log(squareOrSquareRoot(input), expected);
    
    input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];
    console.log(squareOrSquareRoot(input), expected);
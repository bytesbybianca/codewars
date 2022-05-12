// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Regular Ball Super Ball
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53f0f358b9cb376eca001079


// INSTRUCTIONS
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// SOLUTION
class Ball {
  constructor(ballType) {
    this.ballType = ballType || 'regular'
  }
}

// TEST CASES
console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
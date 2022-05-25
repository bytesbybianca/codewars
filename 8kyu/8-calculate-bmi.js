// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Calculate BMI
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57a429e253ba3381850000fb


// INSTRUCTIONS
// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// SOLUTION
function bmi(weight, height) {
  return weight / height**2 <= 18.5 ? "Underweight" :
  weight / height**2 <= 25.0 ? "Normal" : 
  weight / height**2 <= 30.0 ? "Overweight" : "Obese"
}

// // TEST CASES
console.log(bmi(80, 1.80), "Normal");
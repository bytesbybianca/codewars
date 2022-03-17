// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Keep Hydrated!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/582cb0224e56e068d800003c


// INSTRUCTIONS
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


// SOLUTION
function litres(time) {
  if(time > 0) {
    return Math.floor(time*0.5)
  } else if(time === 0) {
    return 0;
  }
}


// TEST CASES
console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');


// CODE WARS BEST PRACTICE SOLUTION

// function litres(time) {
//   return Math.floor(time * 0.5);
// }
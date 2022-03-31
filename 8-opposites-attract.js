// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Opposites Attract
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c


// INSTRUCTIONS
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// SOLUTION

function lovefunc(flower1, flower2){
  return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0) ? true : false)
  // if odd and even, true
  // if even and odd, true
  // if same, false
  // return a boolean
}



// TEST CASES
console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)
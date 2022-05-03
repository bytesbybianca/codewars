// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Surface Area and Volume of a Box
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/565f5825379664a26b00007c


// INSTRUCTIONS
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// SOLUTION
function getSize(width, height, depth) {
  let surfaceArea = 2*(width*height + width*depth + height*depth)
  let volume = width * height * depth
  return [surfaceArea, volume]
}



// // TEST CASES
console.log(getSize(4, 2, 6), [88, 48]);   
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
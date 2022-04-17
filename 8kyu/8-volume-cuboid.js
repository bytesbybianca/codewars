// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Volume of a Cuboid
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58261acb22be6e2ed800003a/


// INSTRUCTIONS
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.


// SOLUTION

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}


// TEST CASES
console.log(getVolumeOfCuboid(1,2,2), 4);
console.log(getVolumeOfCuboid(6.3,2,5), 63);
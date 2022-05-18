// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Data Reverse
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/569d488d61b812a0f7000015


// INSTRUCTIONS
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed.

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// PREP
// P: an array of zeroes and ones with 4 segments, 8 elements each
// R: reversed array by segment
// E: 

  // 11111111  00000000  00001111  10101010
  //  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
  // 10101010  00001111  00000000  11111111
  //  (byte4)   (byte3)   (byte2)   (byte1)

// P:

// SOLUTION
function dataReverse(data) {
  // segment the array by multiples of 8
      // define a new array
      let newArr = []
      // loop through array stepping by multiples of 8
      for(i = 0; i < data.length; i += 8) {
      // slice by 8 and push to new array
        newArr.push(data.slice(i, i + 8))
      }
  // reverse array
  // join
      return newArr.reverse().flat()
}



// // TEST CASES
const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1),data2)
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
console.log(dataReverse(data3),data4)
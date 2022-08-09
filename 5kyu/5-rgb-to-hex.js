// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
RGB To Hex Conversion
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/513e08acc600c94f01000001
*/

/* INSTRUCTIONS

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

// SOLUTION
function rgb(r, g, b){
  const system = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  }

  let str = ''
  let rgbNums = [r, g, b]
  let first = 0
  let second = 0

  rgbNums.map(x => {
    if(x <= 0) {
      str += '00'
    } else if (x > 255) {
      str += 'FF'
    } else {
      first = Math.floor(x / 16)
      second = (x / 16 - first) * 16
      str += system[first]
      str += system[second]
    }
  })
  return str
}

// TEST CASES
console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')
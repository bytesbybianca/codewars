// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
IP Validation
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/515decfd9dcfc23bb6000006
*/

/* INSTRUCTIONS

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/

/* SOLUTION

*/
const validChars = '0123456789.'
function isValidIP(str) {
  for(const char of str) {
    if(!validChars.includes(char)) return false
  }
  let split = str.split('.')
  if(split.length !== 4) return false
  if(!split.every(chunk => Number(chunk) >= 0 && Number(chunk) <= 255)) return false
  for(const chunk in split) {
    if(!split[chunk].length) return false
    if(split[chunk].length > 1 && split[chunk][0] == '0')  return false
  }
  return true
}


// TEST CASES
console.log(isValidIP("0.0.0.0"        ),  true);
console.log(isValidIP("12.255.56.1"    ),  true);
console.log(isValidIP("137.255.156.100"),  true);
console.log(isValidIP(''               ), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'  ), false);
console.log(isValidIP('12.34.56'       ), false);
console.log(isValidIP('01.02.03.04'    ), false);
console.log(isValidIP('256.1.2.3'      ), false);
console.log(isValidIP('1.2.3.4.5'      ), false);
console.log(isValidIP('123,45,67,89'   ), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'       ), false);
console.log(isValidIP('1.2.3.4 '       ), false);
console.log(isValidIP('12.34.56.-7'    ), false);
console.log(isValidIP('1.2.3.4\n'      ), false);
console.log(isValidIP('\n1.2.3.4'      ), false);
console.log(isValidIP("2.1.210."        ),  false);
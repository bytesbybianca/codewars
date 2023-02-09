// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Char Code Calculation
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57f75cc397d62fc93d000059
*/

/* INSTRUCTIONS

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/

// SOLUTION
function calc(x){
    let total1 = ''
    let sum1 = 0
    let sum2 = 0
    for(const char of x) {
        total1 += char.charCodeAt()
    }
    let total2 = total1.replaceAll('7', '1')

    for(let i = 0; i < total1.length; i++) {
        sum1 += Number(total1[i])
        sum2 += Number(total2[i])
    }
    
    return sum1 - sum2
}

// TEST CASES
console.log(calc('ABC'), 6);
console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6); 
console.log(calc('aaaaaddddr'), 30); 
console.log(calc('jfmgklf8hglbe'), 6);  
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
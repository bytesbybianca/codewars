// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Your order, please
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

/* INSTRUCTIONS

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

P: an empty string or a string with each word containing a number
R: if an empty string => empty string
else => the strings reordered by the number they contain

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

// SOLUTION
function order(words){
  let str = []
  let arr = words.split(' ')
  for(let i = 0; i <= arr.length; i++) {
    arr.map(x => {
      if(x.includes(i)) str.push(x)
    })
    }

  return str.join(' ')
}

// TEST CASES
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string" )
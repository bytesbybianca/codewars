// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Split Strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001


// INSTRUCTIONS
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// PREP
// P: a string
// R: an array with the characters paired up. if the last character is odd one out, pair it with an underscore
// E:
  // * 'abc' =>  ['ab', 'c_']
  // * 'abcdef' => ['ab', 'cd', 'ef']
// P:

// SOLUTION
function solution(str){
  // define new array
  let newArr = []
  // loop through string and push pairs into new string
  let newStr = str.split('')
  if(!str.length) return []
  for(i = 0; i < newStr.length; i += 2) {
    newArr.push(`${newStr[i]}${newStr[i+1]}`)
  }
  // find length of last element and add underscore if length is 1
   let pairs = newArr.slice(0,-1)
   pairs.push(newArr[newArr.length-1].replace('undefined','_'))
   return pairs
}


// // TEST CASES
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
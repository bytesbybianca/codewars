// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Name Shuffler
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/559ac78160f0be07c200005a


// INSTRUCTIONS
// Write a function that returns a string in which firstname is swapped with last name.


// SOLUTION

function nameShuffler(str){
  let eachName = str.split(' ')
  return `${eachName[1]} ${eachName[0]}`
}




// TEST CASES
console.log(nameShuffler('john McClane'),'McClane john');
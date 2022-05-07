// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Equal Sides Of An Array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047


// INSTRUCTIONS
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


// SOLUTION
function findEvenIndex(arr) {
  let n, left, right
    for(let i = 0; i <= arr.length; i++) {
      // in the case that n is index 0 and array from index 1 and on = 0
      if(0 == arr.slice(1).reduce((acc, c) => acc + c, 0)) {
        return n = 0
      } else {
        // define left and right or n
        left = arr.slice(0, i) 
        right = arr.slice(i+1, arr.length)
        // if the sum of left of n equals the sum of right of n, return index of n
        left.reduce((acc,c) => acc+c, 0) == right.reduce((acc,c) => acc+c, 0) ? n = i : null
      }
    }
  return n || -1
}

// // TEST CASES
console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
console.log(findEvenIndex([20,10,-80,10,10,15,35]),0, "The array was: [20,10,-80,10,10,15,35] \n");
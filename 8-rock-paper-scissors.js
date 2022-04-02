// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Rock Paper Scissors!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f


// INSTRUCTIONS
// Let's play! You have to return which player won! In case of a draw return Draw!.

// SOLUTION

const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  } else if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors') {
      return 'Player 1 won!'
  } else {
      return 'Player 2 won!'
  }
}


// TEST CASES
console.log(rps('scissors','paper'), 'Player 1 won!')
console.log(rps('scissors','rock'), 'Player 2 won!')
console.log(rps('paper','paper'),  'Draw!')
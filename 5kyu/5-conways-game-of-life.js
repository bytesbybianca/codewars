// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Conway's Game of Life
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/525fbff0594da0665c0003a3


/* INSTRUCTIONS

In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks (PHP: basic black and white squares) respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:
eg:

*/

// SOLUTION
function nextGen(board){
  let nextBoard = []
  // loop through board row
  for(let row = 0; row < board.length; row++) {
    let newBoardRow = []
    // loop through elements
    for(let col = 0; col < board[0].length; col++) {
      let count = 0
          // for each element, count how many live (1) neighbors
          // explore all directions
          count += explore(board, row + 1, col)
          count += explore(board, row + 1, col +1)
          count += explore(board, row + 1, col -1)
          count += explore(board, row, col - 1)
          count += explore(board, row, col + 1)
          count += explore(board, row - 1, col)
          count += explore(board, row - 1, col -1)
          count += explore(board, row - 1, col +1)

        if((board[row][col] === 0 && count === 3) || (board[row][col] === 1 && count === 2) || (board[row][col] === 1 && count === 3)) {
          newBoardRow.push(1)
        } else {
          newBoardRow.push(0)
        }
    }
    nextBoard.push(newBoardRow)
    newBoardRow = []
  }
  // return board
  return nextBoard
}

// explore neighborhood
function explore(board, row, col) {
  if( row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] == 0) {
    return 0;
  }
  // count
  if(board[row][col] == 1) {
    return 1;
  }
}

// TEST CASES
  console.log(nextGen([
      [0,1,0],
      [0,1,0],
      [0,1,0]
    ]), [
      [0,0,0],
      [1,1,1],
      [0,0,0]
    ]);

  console.log(nextGen([
      [1,0,0,0,0,0,0],
      [0,1,1,0,0,0,0],
      [1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ]), [
      [0,1,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [1,1,1,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ]);

  console.log(nextGen([
      [1,1],
      [1,1],
    ]), [
      [1,1],
      [1,1],
    ]);

  console.log(nextGen([
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]), [
      [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
      [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
      [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],           
      [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],           
      [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],           
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0]    
    ]);
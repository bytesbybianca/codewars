// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Define a card suit
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5a360620f28b82a711000047/


/* INSTRUCTIONS

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/


// SOLUTION
function defineSuit(card) {
  if(card.includes('♣')) {
    return 'clubs'
  }
  
  if(card.includes('♦')) {
    return 'diamonds'
  }
  
  if(card.includes('♥')) {
    return 'hearts'
  }
  
  if(card.includes('♠')) {
    return 'spades'
  }
}

// TEST CASES
console.log(defineSuit('Q♠'), 'spades')
console.log(defineSuit('9♦'), 'diamonds')
console.log(defineSuit('J♥'), 'hearts')
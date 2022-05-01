// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// I love you, a little , a lot, passionately ... not at all
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/


// INSTRUCTIONS
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


// SOLUTION
function howMuchILoveYou(nbPetals) {
  return nbPetals % 6 == 1 ? 'I love you' :
  nbPetals % 6 == 2 ? 'a little' : 
  nbPetals % 6 == 3 ? 'a lot' : 
  nbPetals % 6 == 4 ? 'passionately' : 
  nbPetals % 6 == 5 ? 'madly' : 'not at all'
}


// TEST CASES
console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")
console.log(howMuchILoveYou(196),"passionately")
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Alphabet war
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/59377c53e66267c8f6000027
*/

/* INSTRUCTIONS

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

// SOLUTION
const left = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
}

const right = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
}

function alphabetWar(fight) {
  let rightPoints = 0
  let leftPoints = 0
  fight.split('').map(char => {
     if(char in left) {
       leftPoints += left[char]
     } else if(char in right) {
      rightPoints += right[char]
    }
  })
  return rightPoints === leftPoints ? "Let's fight again!" :
  rightPoints > leftPoints ? "Right side wins!" : "Left side wins!"
}

// TEST CASES
console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Two fighters, one winner.
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b


/* INSTRUCTIONS

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

// SOLUTION
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let first = firstAttacker === fighter1.name ? fighter1 : fighter2
  let second = firstAttacker === fighter1.name ? fighter2 : fighter1
  while(fighter1.health > 0 && fighter2.health > 0) {
    if(first.health > 0) {
      second.health = second.health - first.damagePerAttack
    }
    if(second.health > 0) {
      first.health = first.health - second.damagePerAttack
    }
  }
  return first.health > 0 ? first.name : second.name
}

// TEST CASES
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
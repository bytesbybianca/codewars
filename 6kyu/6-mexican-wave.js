// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Mexican Wave
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
*/

/* INSTRUCTIONS

Introduction
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!

*/

/* PREP
P: lowercase string, maybe empty, may have whitespace at begining or end
R: an array containing the parameter repeated as many times as the length of the word, with one letter in uppercase, starting from the beginning of word
E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/

// SOLUTION
function wave(str){
  // define array
  let wave = []
  // trim then split the string to each character
  let split = str.split('')
  // loop through the characters 
  for(let i = 0; i < split.length; i++) {
    if(split[i] !== split[i].toUpperCase()) {
      // capitalize character and join with the rest of the letters
      let string = split.slice(0, i).join('') + split[i].toUpperCase() + split.slice(i + 1).join('')
      // push to array
      wave.push(string)
    }
  }
  // return the array
  return wave
}

// TEST CASES
let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), result, "Should return: '"+result+"'");

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"), result, "Should return: '"+result+"'");

result = [];
console.log(wave(""), result, "Should return: '"+result+"'");

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), result, "Should return: '"+result+"'");

result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), result, "Should return: '"+result+"'");
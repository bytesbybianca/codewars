// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Who likes it?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/


// INSTRUCTIONS
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

/* PREP
P: an empty array or an array of one name or multiple names

R: 
empty array - "no one likes this"
array of 1 name - "Peter likes this"
array of 2 names - "Jacob and Alex like this"
array of 3 names - "Max, John and Mark like this"
array of 4 or more names - first two names and the array length - 2 "others like this" = > "Alex, Jacob and 2 others like this"

E:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

P:

*/

// SOLUTION
function likes(names) {
  // ternary operator for empty string
  return !names.length ? 'no one likes this' : 
  // array length of 1
  names.length === 1 ? `${names[0]} likes this` : 
  // array length of 2
  names.length === 2 ? `${names[0]} and ${names[1]} like this` : 
  // array length of 3
  names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
  // array length of 4 or more
  `${names[0]}, ${names[1]} and ${names.length - 2} others like this` 
}

// TEST CASES
console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Who is the killer?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d
*/

/* INSTRUCTIONS

Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

*/

/* SOLUTION

*/
function killer(suspectInfo, dead) {
  let count = 0

  for(const person in suspectInfo) {
    suspectInfo[person].map(name => {
      if(dead.includes(name)) {
        count++
      }
    })

    if(count === dead.length) {
      return person
    } else {
      count = 0
    }
  }

}

// TEST CASES
console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
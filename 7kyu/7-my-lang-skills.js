// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// My Language Skills
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5b16490986b6d336c900007d


/* INSTRUCTIONS

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

*/

// SOLUTION
function myLanguages(results) {
    let score = []
    let list = []
    for(const key in results) {
        if(results[key] >= 60) {
            score.push(results[key]) 
        }
    }
    score.sort((a,z) => z-a).map(num => {
        for(const key in results) {
            if(num === results[key]) {
                list.push(key)
            }
        }
    })
    return list
}

// TEST CASES
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
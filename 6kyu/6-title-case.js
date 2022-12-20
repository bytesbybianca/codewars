// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Title Case
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5202ef17a402dd033c000009


// INSTRUCTIONS
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.


/*
PREP
P: an empty string / a string of words + optionally, minor words
R: First word cap + minor words as lowercase + all other words in title case
E: 

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

*/

// SOLUTION
function titleCase(title, minorWords) {
  if(!title) {
    return title
  }

  let minorWordsArr

  if(minorWords) {
    minorWordsArr = minorWords.split(' ').map(word => word.toLowerCase())
  }

  console.log(minorWordsArr)

  let wordsArr = title.split(' ')

  for(let i = 0; i < wordsArr.length; i++) {
    // lowercase minor words
    if(i !== 0 && minorWords && minorWordsArr.includes(wordsArr[i].toLowerCase())) {
      wordsArr[i] = wordsArr[i].toLowerCase()
    // title case all non-minor words and first word
    } else {
      wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1).toLowerCase()
    }
  }

  return wordsArr.join(' ')
}


// // TEST CASES
// console.log(titleCase(''), '')
// console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')
// console.log(titleCase('a bc', 'bc'), 'A bc')
// console.log(titleCase('First a of in', 'an often into'), 'First A Of In')
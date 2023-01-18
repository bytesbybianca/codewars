// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Return substring instance count
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5168b125faced29f66000005/


/* INSTRUCTIONS

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

*/

// SOLUTION
function solution(fullText, searchText){
  let count = 0
  
  while(fullText.search(searchText) !== -1) {
      fullText = fullText.replace(searchText, '')
      count++
    }

  return count
}

// TEST CASES
console.log(solution('abcdeb','b'), 2);
console.log(solution('abc','b'), 1);
console.log(solution('abbc','bb'), 1);
console.log(solution('ac','bb'), 0);
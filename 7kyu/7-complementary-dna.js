// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Complementary DNA
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038


// INSTRUCTIONS
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// SOLUTION

function DNAStrand(dna){
  return dna.split('').map((x) => x == 'A' ? 'T' : x == 'T' ? 'A' : x == 'C' ? 'G' : x == 'G' ? 'C' : x).join('')
}
  




// TEST CASES
console.log(DNAStrand("AAAA"),"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"),"CATA","String GTAT is")   
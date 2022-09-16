// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Did she say hallo?
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/56a4addbfd4a55694100001f
*/

/* INSTRUCTIONS

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

*/

// SOLUTION
function validateHello(greetings) {
  const diffGreetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
  for(let i = 0; i < diffGreetings.length; i++) {
    if(greetings.toLowerCase().includes(diffGreetings[i])) return true
  }
  return false
}

// TEST CASES
console.log(validateHello('ahoj'), true);
console.log(validateHello('meh'), false);
console.log(validateHello('HOw halLO HoLA how! aHoJ. lA; PAsA HAStA? BIEn; WIe, VISta hOMBre are hOMbrE? LA. HOLA: La QUE; LA, HaSta? Vista'), true);
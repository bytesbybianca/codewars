// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Valid Spacing
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
*/

/* INSTRUCTIONS

Task
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
Note - there will be no punctuation or digits in the input string, only letters.

*/
/* SOLUTION

*/
function validSpacing(s) {
	if (s === "") return true;
	let trimmed = s.trim();
	let arr = trimmed.split(" ");
	return trimmed === s && !arr.includes("");
}

// TEST CASES
console.log(validSpacing("Hello world"), true);
console.log(validSpacing(" Hello world"), false);
console.log(validSpacing("Hello  world "), false);
console.log(validSpacing("Hello"), true);
console.log(validSpacing("Helloworld"), true);
console.log(validSpacing("VPu vy  T"), false);
console.log(validSpacing(" "), false);
console.log(validSpacing(""), true);

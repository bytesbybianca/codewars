// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Selective fear of numbers
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/55b1fd84a24ad00b32000075
*/

/* INSTRUCTIONS

DESCRIPTION:
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

*/
/* SOLUTION

*/
function AmIAfraid(day, num) {
	switch (day) {
		case "Monday":
			return num === 12;
		case "Tuesday":
			return num > 95;
		case "Wednesday":
			return num === 34;
		case "Thursday":
			return num === 0;
		case "Friday":
			return num % 2 === 0;
		case "Saturday":
			return num === 56;
		case "Sunday":
			return Math.abs(num) === 666;
	}
}

// TEST CASES
console.log(AmIAfraid("Monday", 13), false, "Should return false");
console.log(AmIAfraid("Sunday", -666), true, "Should return true");
console.log(AmIAfraid("Tuesday", 2), false, "Should return false");
console.log(AmIAfraid("Tuesday", 965), true, "Should return true");
console.log(AmIAfraid("Friday", 2), true, "Should return true");

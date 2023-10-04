// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
FIXME: Get Full Name
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/597c684822bc9388f600010f/
*/

/* INSTRUCTIONS

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.

*/
/* SOLUTION

*/
class Dinglemouse {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	getFullName() {
		return `${this._firstName} ${this._lastName}`.trim();
	}
}

// TEST CASES
console.log(
	new Dinglemouse("Clint", "Eastwood").getFullName(),
	"Clint Eastwood"
);

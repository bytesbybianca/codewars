// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
6 kyu
Kebabize
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/57f8ff867a28db569e000c4a
*/

/* INSTRUCTIONS

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters


*/
/* SOLUTION

*/
function kebabize(str) {
	let kebabStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i].toLowerCase() && i > 0) {
			kebabStr += `-${str[i]}`;
		} else if (
			str.toLowerCase().charCodeAt(i) >= 97 &&
			str.toLowerCase().charCodeAt(i) <= 122
		) {
			kebabStr += str[i];
		}
	}

	return kebabStr.toLowerCase();
}

// TEST CASES
const tests = [
	["MyCamelCasedString", "my-camel-cased-string"],
	["myCamelCasedString", "my-camel-cased-string"],
	["MyCamelHas3Humps", "my-camel-has-humps"],
	["myCamelHas3Humps", "my-camel-has-humps"],
	["CAMEL", "c-a-m-e-l"],
	["cAMEL", "c-a-m-e-l"],
	[
		"AbstractSingletonProxyFactoryBean",
		"abstract-singleton-proxy-factory-bean",
	],
	[
		"abstractSingletonProxyFactoryBean",
		"abstract-singleton-proxy-factory-bean",
	],
];

for (let [string, expected] of tests) {
	let actual = kebabize(string);
	console.log(actual, expected);
}

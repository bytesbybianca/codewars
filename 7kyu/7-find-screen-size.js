// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
7 kyu
Find Screen Size
*/ /////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f
*/

/* INSTRUCTIONS

DESCRIPTION:
Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

*/
/* SOLUTION

*/
function findScreenHeight(width, ratio) {
	let ratioNums = ratio.split(":");
	let height = width * (Number(ratioNums[1]) / Number(ratioNums[0]));
	return `${width}x${height}`;
}

// TEST CASES
console.log(findScreenHeight(1024, "4:3"), "1024x768");
console.log(findScreenHeight(1280, "16:9"), "1280x720");
console.log(findScreenHeight(3840, "32:9"), "3840x1080");

// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Human Readable Time
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52685f7382004e774f0001f7


// INSTRUCTIONS
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

/*
P: a non-negative integer (seconds) never exceeding 359999 (99:59:59)
R: a string of time in HH:MM:SS all padded to 2 digits

E:
3600, '01:00:00'
45296, '12:34:56'

P:

*/

// SOLUTION
function humanReadable (seconds) {
   // find hours in seconds and pad to two digits
   let hoursPad = Math.floor(seconds / 3600).toString().padStart(2, 0)
   // find minutes and pad
   let minutesPad = Math.floor((seconds - (hoursPad * 3600)) / 60).toString().padStart(2, 0)
   // find seconds and pad
   let secondsPad = Math.floor(seconds - (hoursPad * 3600) - (minutesPad * 60)).toString().padStart(2, 0)
   // return formatted
   return `${hoursPad}:${minutesPad}:${secondsPad}`
}

// // TEST CASES
console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59), '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90), '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Age in days
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5803753aab6c2099e600000e


// INSTRUCTIONS
// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

// The birthday is expected to be in the past.

// Suggestions on how to improve the kata are welcome!

// PREP

// P: year, month, day
// R: return age in days
// E: 

// SOLUTION
function ageInDays(year, month, day){
  let birthdate = new Date(year, month-1, day)
  let today =  new Date()
  let oneDay = 1000*60*60*24
  return `You are ${Math.floor(Math.abs(today - birthdate)/oneDay)} days old`
}


// // TEST CASES
let birthday = new Date();
birthday.setDate(birthday.getDate() - 2);
console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate()), "You are 2 days old");

// it("Should work for one year old", function(){
birthday = new Date();
birthday.setDate(birthday.getDate() - 365);
console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate()), "You are 365 days old");
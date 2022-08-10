// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*/////////////////////////////////////////
Extract the domain name from a URL
*//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

/* INSTRUCTIONS

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// SOLUTION
function domainName(url){
  let str = ''
  for(let i = 0; i < url.length; i++) {
    if(url.includes('www.')) {
      i = url.indexOf('www.') + 4
    } else if(url.includes('://')) {
      i = url.indexOf('://') + 3
    }
    while(url[i] !== '.') {
      str += url[i]
      i++
    }
    return str
  }
}

// TEST CASES
console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("icann.org"), "icann");
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* 
//sol-1
function palindrome(str) {
 return str.split('').reduce((rev,char) => char+rev,'') === str;
}
*/

/* 
//sol-2
// below solution run twice as much as it needs to..
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i -1];
  });
 }
*/

/* sol-3 
//below solution is optimized solution for the above.
function palindrome(str) {
  let middle = Math.round(str.length / 2);
  const halfStr = str.substr(0,middle);
  return halfStr.split('').every( (char, i) => char === str[str.length - i -1] ); 
 }
 */

// sol-4
//using for loop
function palindrome(str) {
  let middle = Math.floor(str.length / 2);
  let flag = true;
  for (let i=0; i<=middle; i++) {
    if(str.charAt(i) !== str[str.length - i - 1]) {
      flag = false;
      break;
    }
  } 
  return flag;
 }
module.exports = palindrome;

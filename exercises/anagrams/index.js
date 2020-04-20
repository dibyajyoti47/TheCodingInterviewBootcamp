// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//sol2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  //ingoring punctuations
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}




//sol1
/*
function anagrams(stringA = "", stringB= "") {
  if(stringA.length !== stringB.length){
    return false;
  }
  let stringACharMap =  getCharMap(stringA);
  let stringBCharMap =  getCharMap(stringB);
  let chars = Object.keys(stringACharMap);
  for (let char in stringACharMap) {
    if (stringACharMap[char] !== stringBCharMap[char]){
      return false;
    }
  }  
  return true;
}


function getCharMap(word = "") {
  let charMap = {};
  for (let char of word.replace(/[^\w]/g).toLowerCase()) {
   charMap[char] = charMap[char]+1 || 1;
  }
  return charMap;
}
*/


module.exports = anagrams;

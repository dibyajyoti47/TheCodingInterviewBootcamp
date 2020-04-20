// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//sol-1
/*
function capitalize(str) {
  let wordsCapitalized = [];
  for (let word of str.split(' ')) {
    wordsCapitalized.push(word.charAt(0).toUpperCase() + word.slice(1,word.length));
  }
  return wordsCapitalized.join(' ');
}
*/

function capitalize(str) {
  let capitalized = str.charAt(0).toUpperCase();
  for (let i=1; i<str.length; i++){
    if(str.charAt(i-1) === " "){
      capitalized += str.charAt(i).toUpperCase();
    }else {
      capitalized += str.charAt(i);
    }
  }
  return capitalized;
}

module.exports = capitalize;

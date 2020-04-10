// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character+reversed, '');
}

function reverseSolThree(str) {
  let reversed = '';
  for (let character of str){
    reversed = character+reversed;
  }
  return reversed;
}

function reverseSolTwo(str) {
  return str.split('').reverse().join('');
}

function reverseSolOne(str) {
  let newStr = "";
  for(let i=str.length; i>=0; i--){
    newStr = newStr+str.charAt(i);
  }
  return newStr;
}

module.exports = reverse;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  let maxchar = '';
  let maxcount = 0;
  str.split('').forEach(char => {
    if(map.hasOwnProperty(char)) {
      map[char] +=1;
    }else {
      map[char] = 1;
    }
  });
  Object.keys(map).forEach(char => {
    if(map[char] > maxcount) {
      maxcount = map[char];
      maxchar = char;
    }
  });
  return maxchar;
}

module.exports = maxChar;

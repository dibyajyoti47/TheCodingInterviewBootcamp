// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return Math.sign(n) * reverseNumber(n * Math.sign(n));
}

function reverseNumber (n) {
  let reversed = 0;
  while (n > 0) {
   reversed = (reversed*10) + (n % 10)
   n = Math.floor(n/10); 
  }
  return reversed;
}
module.exports = reverseInt;

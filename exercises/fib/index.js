// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//sol-1 using for loop
/*
function fib(n) {
  const results = [0, 1];
  for (let i=2; i<=n; i++) {
    results.push(results[i-1] + results[i-2]);
  }
  return results[n];
}
*/

//sol-2  using recursion-1
/*
function fib(n, results = [0,1]) {

  if(n === 0) { //to handle fib(0)
    return 0;
  }
  if(n === results.length-1) {
    return results[n];
  }
  const a = results[results.length-1];
  const b = results[results.length-2];
  results.push(a+b);
  return fib(n, results);
}
*/

//sol-3  using recursion-2
// this will be exponential run time,  not encouraged
/*
function fib(n) {
  if(n < 2) {  //to handle fib(0) or fib(1)
    return n;
  }
  return fib(n-1) + fib(n-2);
}
*/

//sol-4  using recursion-3 with memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]){
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}
function slowFib(n) {
  if(n < 2) {  //to handle fib(0) or fib(1)
    return n;
  }
  return fib(n-1) + fib(n-2);  
}

const fib = memoize(slowFib);

module.exports = fib;

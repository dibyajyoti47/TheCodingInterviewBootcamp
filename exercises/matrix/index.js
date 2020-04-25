// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  for (let i=0; i<n; i++){
    results.push([]);    
  }
  let counter = 1;
  let rowstart = 0;
  let rowend = n-1;
  let columnstart=0;
  let columnend = n-1;
  while (rowstart <= rowend && columnstart <= columnend) {
    //top row
    for (let i=columnstart; i<=columnend; i++) {
      results[rowstart][i] = counter;
      counter++;
    }
    rowstart++;

    //right column
    for (let i=rowstart; i<=rowend; i++) {
      results[i][columnend] = counter;
      counter++;
    }
    columnend--;

    //right row
    for(let i=columnend; i>=columnstart; i--) {
      results[rowend][i] = counter;
      counter++;
    }
    rowend--;

    //first column
    for(let i=rowend; i>=rowstart; i--) {
      results[i][columnstart] = counter;
      counter++;
    }
    columnstart++;
  }
  return results;
}

module.exports = matrix;

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);

// or...

words.sort((a, b) => {
  if (a.length > b.length) {
    return 1; 
  } else if (a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
})

// ===========

[ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});
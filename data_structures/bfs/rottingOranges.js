
// declare variable for counting fresh amount, minutes spent, and queue to keep track of rotten oranges. Queue takes an array with row, col, time.
// define helper function to queue up surround oranges of a rotten one, incrementing time
// count up all the fresh oranges and queue up the rotten ones with helper function with time zero
// loop through queue, checking if out of bounds or already rotten
// if not change value of orange to rotten in the grid
// remove one from fresh
// reassign minutes spent to the max of itself and the time value of the queue item
// call helper function with row, col and time
// return minutes unless fresh is 0


var orangesRotting = function (grid) {
  let fresh = 0;
  let minutes = 0;
  let queue = [];

  // loop throught to scan array, counting fresh oranges and queueing up rotten ones

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let orange = grid[i][j];
      if (orange === 1) {
        fresh++;
      } else if (orange === 2) {
        getNext(i, j, 0);
      }
    }
  }

  function getNext(row, col, time) {
    queue.push([row - 1, col, time + 1]);
    queue.push([row + 1, col, time + 1]);
    queue.push([row, col - 1, time + 1]);
    queue.push([row, col + 1, time + 1]);
  }

  // process queue

  for (let i = 0; i < queue.length; i++) {
    let [row, col, time] = queue[i];
    // check if out of bounds or empty or already rotten
    if (
      row > grid.length - 1 ||
      row < 0 ||
      col > grid[0].length - 1 ||
      col < 0 ||
      grid[row][col] !== 1
    )
      continue;
    grid[row][col] = 2;
    fresh--;
    minutes = Math.max(minutes, time);
    //infect others
    getNext(row, col, time);
  }

  return fresh ? -1 : minutes;
};



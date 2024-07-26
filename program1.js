function getTotalIsles(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  function describe(row, col) {
      if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === 'W') {
          return;
      }

      grid[row][col] = 
  }

  for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
          if (grid[row][col] === 'L') {
              count++;
              describe(row, col);
          }
      }
  }

  return count;
}

module.exports = getTotalIsles;

function getTotalIsles(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
      [0, 1],  // right
      [1, 0],  // down
      [0, -1], // left
      [-1, 0]  // up
  ];

  function dfs(row, col) {
      // Mark this cell as visited
      visited[row][col] = true;

      // Explore all 4 directions
      for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;
          
          if (
              newRow >= 0 && newRow <

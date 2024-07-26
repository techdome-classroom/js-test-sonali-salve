const getTotalIsles = function (grid,x,y,i,j,v) {

  const rows=grid.length;
  const cols =grid[0];
  if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] <= 0) {
    return;
  }
  grid[i][j]=1;
  


};

module.exports = getTotalIsles;
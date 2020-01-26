/**
 * @param {number[][]} grid
 * @return {number}
 */

// 0 empty
// 1 fresh
// 2 rotten

const orangesRotting = function (grid) {
    if (!grid.length || !grid[0].length) return -1;

    let depth = 0;
    let queue = [];
    let fresh = 0; //will use this as a check to see if any fresh remain after contamination

    //Loop through the grid and count fresh oranges and load queue with rotten oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    return depth;
};

orangesRotting([[2,1,1],[1,1,0],[0,1,1]])
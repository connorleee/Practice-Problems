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

    // create movement array for cleaner code
    const m = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // start working through queue. also check if there are any remaining fresh oranges for a chance to short cicuit
    while (queue.length && fresh) { //
        // start shifting off queue item 
        const [x, y] = queue.shift();

        for (let d = 0; d < m.length; d++) {
            const x2 = x + m[d][0]; //this is using the movement array to check all adjacent locations
            const y2 = y + m[d][1];

            // check if each movement is valid. if so, then check orange status
            // movement must be on the grid. so need to check left and right for x and up and down for y
            if(x2 >= grid.length || y2 >= grid.length || x2 === 0 || y2 === 0 || grid[x2][y2] !== 1) {
                continue; //if invalid movement, skip remainder of this loop
            }

            // if orange is fresh, it will become rotten, so decrement fresh, turn grid position to rotten, and add grid position to queue
            fresh--;
            grid[x2][y2] = 2;
            queue.push([x2, y2]);
        }

        // Once we've checked all directions, we can increment the depth
        depth++;
    }

    return fresh > 0 ? -1 : depth; //check if there are any remaining fresh oranges that weren't able to be touched
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
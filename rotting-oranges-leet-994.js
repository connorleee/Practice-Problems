/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    let depth = 0;
    let queue = [];

    const foundRotten = (row, col) => {
        queue.push([row, col]);
        depth++;
        grid[row][col] = 0;
    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++) {
            const el = grid[row][col];

            // found the first rotten orange
            if(el === 2) {
                queue.push(el);
                depth++;
                grid[row][col] = 0; //any item touched will be turned back to 0 so we don't touch it again.
            }

            while(queue.length) {
                // check right
                if(grid[row][col + 1] === 2) {

                } 
            }
        }
    }

    return depth;
};
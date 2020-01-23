/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    let depth = 0;
    let queue = [];

    const foundRotten = (row, col) => {
        queue.push([row, col]);
        grid[row][col] = 0;
    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++) {
            const el = grid[row][col];

            // found the first rotten orange
            if(el === 2) {
                queue.push([row, col]);
                depth++;
                grid[row][col] = 0; //any item touched will be turned back to 0 so we don't touch it again.
            }

            while(queue.length) {
                const current = queue.shift();
                const y = current[0];
                const x = current[1]

                // check right
                if( grid[y][x + 1] === 1 ) {
                    foundRotten(x + 1, y);
                }
                
                // check left
                if( grid[y][x-1] === 1) {
                    foundRotten(x-1, y);
                }

                // check down
                if( grid[y + 1][x] === 1) {
                    foundRotten(y+1, x);
                }

                // check up
                if( grid[y - 1][x] === 1) {
                    foundRotten(y-1, x);
                }

                depth++
            }
        }
    }

    return depth;
};
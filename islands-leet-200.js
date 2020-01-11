var numIslands = function (grid) {
    let islandCount = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            // if we find a 1, then initiate a depth first search for 1's and change all item's it touches to 0. 
            // incriment island count
            if (grid[y][x] === 1) {
                let piecesOfLand = [];
                piecesOfLand.push([x, y]);

                while (piecesOfLand.length) {
                    const currentPieceOfLand = piecesOfLand.pop();
                    const xCoord = currentPieceOfLand[0];
                    const yCoord = currentPieceOfLand[1];

                    if (grid[yCoord + 1][xCoord] === 1) {
                        piecesOfLand.push([xCoord, yCoord + 1])
                        grid[yCoord + 1][xCoord] = 0;
                    }

                    if (grid[yCoord][xCoord + 1] === 1) {
                        piecesOfLand.push([xCoord + 1, yCoord])
                        grid[yCoord][xCoord + 1] = 0;
                    }
                }

                islandCount++
            }
        }
    }

    return islandCount;
};

numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
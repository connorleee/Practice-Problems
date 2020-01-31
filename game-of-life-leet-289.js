/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let neighbors = [0, 1, -1]; //travesal tool
    let rows = board.length;
    let cols = board[0].length;

    let copyBoard = JSON.parse(JSON.stringify(board));

    // // populate the copied board
    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         copyBoard[row][col] = board[row][col];
    //     }
    // }

    // loop through each item and find all live neighbors at each cell. if a 1, apply rules 1-3 logic. if a 0, apply rule 4
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let neighborCount = 0;

            // check adjacency cells
            for (let i = 0; i < neighbors.length; i++) {
                for (let j = 0; j < neighbors.length; j++) {

                    // this will be used for validity check of adjacent cells.
                    if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
                        let r = row + neighbors[i];
                        let c = col + neighbors[j];

                        //actual validity check
                        if ((r < rows && r >= 0) && (c < cols && c >= 0) && copyBoard[r][c] === 1) {
                            neighborCount++;
                        }
                    }
                }
            }

            // check rules 1 or 3. rule 2 does nothing so we'll check all other cases and ignore if nothing else is met
            if (copyBoard[row][col] === 1) {
                // rule 1 or 3
                if (neighborCount < 2 || neighborCount > 3) {
                    board[row][col] = 0;
                }
            }

            //check rule 4
            if (copyBoard[row][col] === 0 && neighborCount === 3) {
                board[row][col] = 1;
            }
        }
    }
};
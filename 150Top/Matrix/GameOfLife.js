var gameOfLife = function(board) {
    let ROWS = board.length;
    let COLS = board[0].length;

    let dx = [1,1,0,-1,-1,-1,0,1];
    let dy = [0,1,1,1,0,-1,-1,-1];

    findNeighborsAndLiveCount(dx,dy,ROWS,COLS,board);

    convertBoardToNormalState(ROWS,COLS,board);

    return board;
};

var convertBoardToNormalState = function(ROWS,COLS,board){
    for(let i=0; i < ROWS; i++){
        for(let j=0; j < COLS; j++){
            if(board[i][j] <= 0){
                board[i][j] = 0;
            }else{
                board[i][j] = 1;
            }
        }
    }
}

var findNeighborsAndLiveCount = function(dx,dy,ROWS,COLS,board){
    for(let i=0; i < ROWS; i++){
        for(let j=0; j < COLS; j++){
            let liveCounts = 0;
            for(let k=0; k < 8; k++){
                if(isSafe(i + dx[k], j + dy[k],ROWS,COLS) && Math.abs(board[i + dx[k]][j + dy[k]]) == 1){
                    liveCounts++;
                }
            }

            if(board[i][j] == 1 && (liveCounts < 2 || liveCounts > 3)){
                board[i][j] = -1;
            }else if(board[i][j] == 0 && liveCounts == 3){
                board[i][j] = 2;
            }
        }
    }
}

var isSafe = function(x,y,ROWS,COLS){
    return x >= 0 && x < ROWS && y >= 0 && y < COLS;
}


// Time complexity : O(ROWS * COLS * 8)  almost O(n^2)
// Space complexity : O(1) in place changes
// Tags : Matrix,Recursion,Simulation
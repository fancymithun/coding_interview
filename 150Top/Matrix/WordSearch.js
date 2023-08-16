var exist = function (board, word) {
    for(let i=0; i < board.length; i++){
        for(let j=0; j < board[0].length; j++){
            if(dfs(board,i,j,word)) return true;
        }
    }

    return false;
};

var dfs = function(board,i,j,remaining){
    if(remaining === "") return true;

    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;

    if(board[i][j] !== remaining[0]) return false;

    let temp = board[i][j];

    board[i][j] = "-";

let result = dfs(board,i-1,j,remaining.slice(1)) || dfs(board,i,j+1,remaining.slice(1)) || dfs(board,i+1,j,remaining.slice(1)) || dfs(board,i,j-1,remaining.slice(1)) 

    board[i][j] = temp;

    return result;
}

// Time complexity : O(n^2)
// Space complexity : O(1)
// Tags : dfs,matrix,recursion
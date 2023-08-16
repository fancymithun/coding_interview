
var solve = function(board) {
    // sink the borders
    sinkBorders(board)
    
    for(let r=0;r<board.length;r++){
      for(let c=0;c<board[r].length;c++){
        if(board[r][c] === 'T') // border bound
          board[r][c] = 'O'
          else board[r][c] = "X";
      }
    }
    return board
};
  
function sinkBorders(board){
    for(let r=0;r<board.length;r++){
        for(let c=0;c<board[r].length;c++){
        if((r>0 && r<board.length-1) && (c>0 && c<board[r].length-1)) continue // within bounds
        if(board[r][c] !== 'O') continue 
        dfs(board, r, c)
        }
    }
}
  
function dfs(g, r, c){
    if(r<0||r>=g.length || c<0 || c>=g[r].length) return
    if(g[r][c] !== 'O') return
    g[r][c] = 'T'
    dfs(g,r+1,c)
    dfs(g,r-1,c)
    dfs(g,r,c+1)
    dfs(g,r,c-1)
}

// Time complexity : O(n^2)
// Space complexity : O(1)
// Tags : Matrix,dfs


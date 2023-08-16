/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let result = [];

    let root = buildTrie(words);

    for(let i=0; i < board.length; i++){
        for(let j=0; j < board[0].length; j++){
            dfs(root,i,j,board,result);
        }
    }
    
    return result;
};

var dfs = function(root,i,j,board,result){
    if(root.end){
        result.push(root.end);
        root.end = null;
    }

    if(i < 0 || j < 0 || i >= board.length || j>= board[0].length || !root[board[i][j]]) return;

    let char = board[i][j];
    board[i][j] = "-";
    
    dfs(root[char],i-1,j,board,result);
    dfs(root[char],i,j+1,board,result);
    dfs(root[char],i+1,j,board,result);
    dfs(root[char],i,j-1,board,result);

    board[i][j] = char;
}


var buildTrie = function(words){
    let root = {};

    for(let word of words){
        let pointer = root;

        for(let char of word){
            if(!pointer[char]) pointer[char] = {};
            pointer = pointer[char];
        }

        pointer.end = word;
    }

    return root;
}

// Time complexity : O((w * c) + (n * m * w)) // w is word length which is max upto 10 which is negligible and is not considered...
// Space complexity : O(w) // array of word
// Tags : Trie, Matrix, dfs
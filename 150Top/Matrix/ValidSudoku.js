var isValidSudoku = function(board) {

    //keep track of values in particular row,column and square according to rule of sudoku
    let rows = {}, cols = {}, squares = {};

    for(let i=0; i < 9; i++){
        for(let j=0; j < 9; j++){
            if(board[i][j] === '.') continue;

            let value = board[i][j];

            let squareKey = `${Math.floor(i/3)}${Math.floor(j/3)}`;

            if(!rows[i]) rows[i] = new Set();
            if(!cols[j]) cols[j] = new Set();
            if(!squares[squareKey]) squares[squareKey] = new Set();

            if(rows[i].has(value) || cols[j].has(value) || squares[squareKey].has(value)) return false;

            rows[i].add(value);
            cols[j].add(value);
            squares[squareKey].add(value);
        }
    }

    return true;
};

// Time complexity : O(n^2)
// Space complexity : O(n)
// Tags : Object,Hash Set, Matrix, Array
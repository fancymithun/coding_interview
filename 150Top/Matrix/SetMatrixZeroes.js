var setZeroes = function(matrix) {
    let rows = new Array(matrix.length).fill(0);
    let columns = new Array(matrix[0].length).fill(0);

    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rows[i] = 1;
                columns[j] = 1;
            }
        }
    }

    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[0].length; j++){
            if(rows[i] || columns[j]) matrix[i][j] = 0;
        }
    }

    return matrix;
};

// Time complexity : O(n^2)
// Space complexity : O(n)
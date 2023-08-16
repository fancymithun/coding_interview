var searchMatrix = function(matrix, target) {
    let row = 0, column = matrix[0].length-1;

    while(column >= 0 && row >=0 && column < matrix[0].length && row < matrix.length){
        let value = matrix[row][column];

        if(value > target){
            column--;
        }else if(value < target){
            row++;
        }else{
            return true;
        }
    }

    return false;
};

// Time complexity : O(row + column)  worst case
// Space complexity : O(1)
// Tags : Matrix,Two pointers
var kthSmallest = function(matrix, k) {
    let low = matrix[0][0], high = matrix[matrix[0].length-1][matrix[0].length-1];

    while(low < high){
        let mid = Math.floor((low + high) / 2);
        let count = 0;

        for(let i=0; i < matrix.length; i++){
            for(let j=0; j < matrix[0].length; j++){
                if(matrix[i][j] <= mid) count++;
                else break;
            }
        }

        if(count < k) low = mid + 1;
        else high = mid;
    }

    return low;
};

// Time complexity : O(n^2 logk)
// Space complexity : O(1)
// Tags : Matrix.Max Heap, Binary Search
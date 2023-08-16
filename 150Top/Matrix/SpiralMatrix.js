var spiralOrder = function(matrix) {
    let result = [];

    while(matrix.length){  // n
        let shifted = matrix.shift();  // n +
        result.push(...shifted);

        for(let subArray of matrix){  // n 
            let poppedValue = subArray.pop();
            if(poppedValue) result.push(poppedValue);
            subArray.reverse();
        }

        matrix.reverse();
    }

    return result;
};

// Time complexity : O(n^2)
// Space complexity : O(n)
// Tags : Matrix,Array

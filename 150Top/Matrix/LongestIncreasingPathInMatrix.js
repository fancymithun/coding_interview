/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0) return 0;

    let map = new Map();

    let max = {count : 0};

    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[0].length; j++){
            let key = `${i}|${j}`;
            if(!map.has(key)){
                helper(i,j,-Number.INFINITY,matrix,map,max);
            }
        }
    }

    return max.count;
};

function helper(i,j,prev,matrix,map,max){
    let key = `${i}|${j}`;

    if(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] <= prev) return 0;

    let value = matrix[i][j];

    if(map.has(key)) return map.get(key);

    let top = helper(i-1,j,value,matrix,map,max);
    let right = helper(i,j+1,value,matrix,map,max);
    let bottom = helper(i+1,j,value,matrix,map,max);
    let left = helper(i,j-1,value,matrix,map,max);

    map.set(key,Math.max(top,right,bottom,left) + 1);

    max.count = Math.max(max.count,map.get(key));

    return map.get(key);
}


// Time complexity : O(ROW * COL * 4)  and even added memoization which is helpful in long run so we can take it as O(n^2)
// Space complexity : O(n) because of using map
// Tags : Matrix,Memoization,Recursion
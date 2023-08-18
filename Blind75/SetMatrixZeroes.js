let setZeroes = (matrix) => {
    let [rows,columns] = [matrix.length, matrix[0].length];
    let [firstArray,secondArray]= initializeRowColumn(rows,columns);
    [rows,columns] = setZeroesInMatrix(matrix,firstArray,secondArray);
    let result = setRowColumnsInMatrix(matrix,rows,columns);
    return result
}

let setRowColumnsInMatrix = (matrix,rows,columns) => {
    for(let i=0; i < matrix.length; i++){
        for(let j=0; j < matrix[0].length; j++){
            if(rows[i] === 0 || columns[j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    return matrix
}

let setZeroesInMatrix = (matrix,rows,columns) => {
    for(let i=0; i < rows.length; i++){
        for(let j=0; j < columns.length; j++){
            if(matrix[i][j] === 0){
                rows[i] = 0
                columns[j] = 0
            }
        }
    }
    return [rows,columns]
}

let initializeRowColumn = (rows,columns) => {
    let rowsArray = new Array(rows).fill(1)
    let columnsArray = new Array(columns).fill(1)
    return [rowsArray,columnsArray]
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]]  // [[1,0,1],[0,0,0],[1,0,1]]
let result = setZeroes(matrix)
console.log(result);
var topKFrequent = function(nums,k){
    let frequency = {}
    frequency = getFrequency(nums,{}) // {2:1,1:3,4:1} [2,1,4]. 
    let sortedList = sortInOrder(frequency) // [[1,3],[2,1]]
    let result = sortedList.slice(0,k)
    let output = []
    for(let i=0; i < result.length; i++){
        output.push(result[i][0])
    }
    return output
}

const sortInOrder = (frequency) => {
    let resultedArray = Object.keys(frequency).map((key) => [Number(key),frequency[key]]) // [[2,1],[1,3],[4,1]]
    return resultedArray.sort((a,b) => b[1] - a[1])
}

const getFrequency = (nums,frequency) => {
    for(let item of nums){
        if(frequency.hasOwnProperty(item)){
            frequency[item]+=1
        }else{
            frequency[item] = 1
        }
    }
    
    return frequency
}

let nums = [2,2,3,3,1,1,1,4,4,5], k = 2

let result = topKFrequent(nums,k)
console.log(result);
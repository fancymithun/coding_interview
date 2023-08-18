var twoSum = (nums,target) => {

    let map = findFrequency(nums,new Map())
    let result = findTwoSum(nums,map,target)
    return result
} // Time O(n) space O(n)

const findFrequency = (nums,map) => {
    for(let i=0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],i)
        }
    }
    return map
} // Time O(n) Space O(n)

const findTwoSum = (nums,map,target) => {
    for(let i=0; i< nums.length; i++){
        const currentValue = nums[i]
        let difference = target - currentValue
        if(map.has(difference) && map.get(difference) != i){
            return [i,map.get(difference)]
        }
    }

    return [-1,-1]
} // Time O(n) Space O(n)

let result = twoSum([3,2,4],6)
console.log(result);
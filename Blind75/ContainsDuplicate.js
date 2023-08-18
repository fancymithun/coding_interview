// var containsDuplicate = (nums) => {
//     const set = new Set(nums)
//     if(set.size != nums.length){
//         return true
//     }

//     return false
// }

// O(n) time and space

var containsDuplicate = (nums,numSet = new Set()) => {
    for(const num of nums){
        if(numSet.has(num)) {
            console.log(true);
            return true
        }
        numSet.add(num)
    }
    console.log(false);
}

let nums = [1,2,3,4]
containsDuplicate(nums)


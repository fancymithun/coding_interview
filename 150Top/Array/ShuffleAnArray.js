var Solution = function(nums){
    this.nums = nums;
    this.originalArray = [...nums];
}

Solution.prototype.reset = function(){
    return this.originalArray;
}

Solution.prototype.shuffle = function(){
    let length = this.nums.length;
    let numsArray = this.nums;

    for(let i=0; i < length; i++){
        let j = Math.floor(Math.random() * (length - i)) + i;
        let temp = numsArray[i];
        numsArray[i] = numsArray[j];
        numsArray[j] = temp;
    }

    return numsArray;
}

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Array
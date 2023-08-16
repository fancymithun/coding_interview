var trap = function(height) {
    let result = 0;

    let size = height.length;

    let leftMax = new Array(size);
    let rightMax = new Array(size);

    leftMax[0] = height[0];
    rightMax[size-1] = height[size-1];

    for(let i=1; i < height.length; i++){
        if(height[i] > leftMax[i-1]){
            leftMax[i] = height[i];
        }else{
            leftMax[i] = leftMax[i-1];
        }
    }

    for(let i=size-2; i >= 0; i--){
        if(height[i] > rightMax[i+1]){
            rightMax[i] = height[i];
        }else{
            rightMax[i] = rightMax[i+1];
        }
    }

    for(let i=0; i < size; i++){
        result += Math.min(leftMax[i],rightMax[i]) - height[i];
    }

    return result;
};

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Two pointers, Stack


var trap = function(height) {
    let result = 0, leftMax = 0, rightMax = 0,left = 0, right = height.length-1;
    
    while(left <= right){
        if(rightMax > leftMax){
            if(height[left] > leftMax) leftMax = height[left];
            else result += leftMax - height[left];
            left++;
        }else{
            if(height[right] > rightMax) rightMax = height[right];
            else result += rightMax - height[right];
            right--;
        }
    }
    
    return result;
};

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : Two pointers, Stack
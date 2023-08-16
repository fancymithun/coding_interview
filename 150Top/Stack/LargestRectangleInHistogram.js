var largestRectangleArea = function(heights) {
    heights.push(0);
    let result = 0;
    let stack = [];

    for(let i=0; i < heights.length; i++){
        let heightStart = i;

        while(stack.length && stack[stack.length-1][1] > heights[i]){
            let [pos,height] = stack.pop();
            result = Math.max(result,(i-pos) * height);
            heightStart = pos;
        }

        stack.push([heightStart,heights[i]]);
    }

    return result;
};

// Time complexity : O(nlogn)
// Space complexity : O(n)
// Tags : Stack, Monotonic stack
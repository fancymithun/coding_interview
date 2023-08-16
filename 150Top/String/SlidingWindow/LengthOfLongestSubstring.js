var lengthOfLongestSubstring = function(s) {
    let [left,right,max] = [0,0,0];

    let countMap = new Map();

    while(right < s.length){
        const canSlide = countMap.has(s[right]);

        if(canSlide){
            const slideIndex = countMap.get(s[right]) + 1;
            left = Math.max(left,slideIndex);
        }

        countMap.set(s[right],right);
        const window = right - left + 1;
        max = Math.max(max,window);
        right++;
    }

    return max;
};  

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Sliding window, string
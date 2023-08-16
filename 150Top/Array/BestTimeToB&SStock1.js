var maxProfit = function(prices) {
    let previous = prices[0];
    let result = 0;

    for(let i=1; i < prices.length; i++){
        if(prices[i] < previous){
            previous = prices[i];
        }else{
            result = Math.max(result,prices[i] - previous);
        }
    }

    return result;
};

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : Array
var isValid = function(s) {
    let mapBrackets = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    };

    let openBrackets = ["(","[","{"];

    let index = 0;

    let stack = [];

    while(index < s.length){
        if(openBrackets.includes(s[index])){
            stack.push(s[index]);
        }else{
            if(mapBrackets[s[index]] === stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }
        }

        index++;
    }

    return stack.length === 0;
};

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Stack,Hashmap
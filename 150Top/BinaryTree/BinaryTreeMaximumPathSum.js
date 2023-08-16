var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(node){
        if(!node) return 0;

        let left = Math.max(0,dfs(node.left));
        let right = Math.max(0,dfs(node.right));

        max = Math.max(max,left + right + node.val);

        return Math.max(left,right) + node.val;
    }

    dfs(root);

    return max;
};

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : Binary Tree,DFS
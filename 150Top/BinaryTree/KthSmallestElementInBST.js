var kthSmallest = function(root, k) {
    let result = [];

    function dfs(node){
        if(!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);

    }

    dfs(root);

    return result[k-1];
};

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : BST, heap
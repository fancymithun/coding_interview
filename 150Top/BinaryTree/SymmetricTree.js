var isSymmetric = function(root) {
    return dfs(root.left,root.right);
};

var dfs = function(lNode,rNode) {
    if(!lNode && !rNode) return true;

    if(!lNode || !rNode || lNode.val !== rNode.val) return false;
    return dfs(lNode.left,rNode.right) && dfs(lNode.right,rNode.left);
}

// Time complexity : O(logn)
// Space complexity : O(1)
// Tags : dfs,Trees
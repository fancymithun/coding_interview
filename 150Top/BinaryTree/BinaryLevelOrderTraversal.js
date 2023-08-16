var levelOrder = function(root) {
    let result = [];

    let node = root;

    dfs(node,level=0,result);

    return result;
};

var dfs = function(node,level,result){
    if(!node) return;

    if(!result[level]) result[level] = [];

    result[level].push(node.val);

    dfs(node.left,level+1,result);
    dfs(node.right,level+1,result);

}

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : DFS,Binary tree
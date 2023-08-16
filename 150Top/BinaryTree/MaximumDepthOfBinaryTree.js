var maxDepth = function(root) {

    let result = 0;

    var dfs = function(node,level){
        if(!node) return;

        if(result < level) result = level;

        dfs(node.left,level+1);
        dfs(node.right,level+1);
    }

    dfs(root,level=1);

    return result;
};

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : DFS,Binary Tree
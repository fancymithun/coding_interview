var zigzagLevelOrder = function(root) {
    let result = [];
    let level = 0;

    dfs(root,level,result);

    for(let i=0; i < result.length; i++){
        if(i % 2){
            result[i].reverse();
        }
    }

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
// Tags : DFS,Binary Tree
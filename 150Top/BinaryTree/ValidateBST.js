var isValidBST = function(root) {
    return dfs(root,null,null);
};

var dfs = function(node,max,min){
    if(!node) return true;

    if((max != null && node.val >= max) || (min != null && node.val <= min)){
        return false;
    }else{
        return dfs(node.left,node.val,min) && dfs(node.right,max,node.val);
    }
}

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : BST,dfs
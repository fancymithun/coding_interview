var buildTree = function(preorder, inorder) {

    if(!preorder.length) return null;
    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1,mid+1), inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1));

    return root;
};

//  Note
//  -------

//  inorder - left root right
//  preorder - root left right
//  postorder - left right root

//  Time complexity : O(n)
//  Space complexity : O(n) // building new tree
//  Tags : Binary Tree, Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let output = [];

    var traverse = function(node){
        if(!node) {
            output.push('null');
            return;
        }

        output.push(node.val);

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    return output.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');

	let idx = 0;
	const traverse = data => {
		const val = data[idx++];
		const root = new TreeNode(val);

		if (val === 'null') return null;

		root.left = traverse(data);
		root.right = traverse(data);

		return root;
	};

	return traverse(data);
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Binary Tree, DFS
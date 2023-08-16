var connect = function(root) {
    let pointer = root;

    while(root && root.left){
        let temp = root;
        while(temp){
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }

        root = root.left;
    }

    return pointer;
};

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Time complexity : O(n)
// Space complexity : O(1)
// Tags : Perfect binary tree, Iterative
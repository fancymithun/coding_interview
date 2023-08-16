// For example : root = [1,2,3,4,5,6,7]

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        var newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if(newNode.val < node.val){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    printBST() {
        var stack = [], current = this.root;
        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            console.log(stack);
            current = stack.pop();
            console.log(current.val);
            current = current.right;
        }
    }

}

const BST = new BinarySearchTree();
BST.insert(4);
BST.insert(3);
BST.insert(2);
BST.insert(1);
BST.insert(6);
BST.insert(5);
BST.insert(7);
BST.printBST();
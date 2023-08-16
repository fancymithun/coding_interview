let Node = require("./Node");

module.exports = class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(){
        let temp = new Node(data);
        temp.next = this.head;
        this.head = temp;
        return this;
    }

    getHead(){
        return this.head;
    }
}
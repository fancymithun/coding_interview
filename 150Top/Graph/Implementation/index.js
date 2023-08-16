let LinkedList = require("./LinkedList");

class Graph {
    constructor(vertices){
        this.vertices = vertices;

        this.list = [];

        for(let i=0; i < vertices.length; i++){
            let temp = new LinkedList();
            this.list.push(temp);
        }

        console.log(this.list);
    }

    addEdge(source,destination){
        if(source < this.vertices.length && destination < this.vertices.length){
            this.list[source].insertAtHead(destination);
        }
    }

    printGraph(){
        let iteration = 0;

        while(iteration < this.list.length){
            console.log(iteration);
            let head = this.list[iteration].getHead();
            while(head){
                console.log(`[${head.data}]`);
                head = head,next;
            }
            iteration++;
        }
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
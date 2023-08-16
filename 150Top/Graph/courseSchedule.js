/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjacencyList = [];
    let visited = [];

    adjacencyList = adjacencyListCreation(adjacencyList,prerequisites);

    for(let i=0; i < numCourses; i++){
        if(!dfs(i,adjacencyList,visited)) return false;
    }

    return true;
};

function dfs(startNode,adjacencyList,visited){
    if(visited[startNode]) return false;

    if(visited[startNode] === false) return true;

    visited[startNode] = true;

    for(let nextNode of adjacencyList[startNode] ?? []){
        if(!dfs(nextNode,adjacencyList,visited)) return false;
    }

    visited[startNode] = false;

    return true;
}

function adjacencyListCreation(adjacencyList,prerequisites){
    for(let [a,b] of prerequisites){
        if(!adjacencyList[b]){
            adjacencyList[b] = [];
        }

        adjacencyList[b].push(a);
    }

    return adjacencyList;
}

// Time complexity : O(V + E)
// Space complexity : O(n)
// Tags : Graph, Array
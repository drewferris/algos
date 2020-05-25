// undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
  }
}

// let g = new Graph();
// g.addVertex('dre')
// g.addVertex('d')
// g.addVertex('dr')
// g.addVertex('drew');

// g.addEdge('dre', 'd')
// g.addEdge('dr', 'd')
// g.addEdge('drew', 'd');

// g.removeEdge('drew', 'd')
let pause;

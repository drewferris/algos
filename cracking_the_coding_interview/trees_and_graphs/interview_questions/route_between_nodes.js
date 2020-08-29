// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

class Node {
    constructor(val) {
        this.val = val;
        this.adjacents = []; // adjacency list
        this.visited = false;
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }
}

const search = (graph, source, target) => {
    let queue = [source];
    while (queue.length) {
        let node = queue.shift();
        for (const neighbor of node.adjacents) {
            if (!neighbor.visited) {
                if (neighbor.val === target.val) return true;
                neighbor.visited = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}

let graph = new Graph(),
    zero = new Node(0),
    one = new Node(1),
    five = new Node(5),
    four = new Node(4),
    two = new Node(2),
    three = new Node(3);

two.addAdjacent(one);
three.addAdjacent(two);
three.addAdjacent(four);
one.addAdjacent(three);
one.addAdjacent(four);
zero.addAdjacent(one);
zero.addAdjacent(four);
zero.addAdjacent(five);

console.log(search(graph, one, three));
console.log(search(graph, five, four));


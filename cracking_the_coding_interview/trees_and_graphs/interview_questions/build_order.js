// Given a list of projects and a list of dependencies determine the order of work. A project cannot start unless its dependencies are finished.

// Solution falls under the classification of Topological Sort

// First identify nodes that dont depend on anything and build them first.
// Now since those are done, these can be removed from other nodes dependencies.
// Again identify nodes that dont depend on anything and build. (Build and remove outgoing edges)
// In the edge case where there are nodes remaining and all have dependencies (incoming edges) then there is no way to build the system.

// Steps:
// 1. Build a graph where each project is a node and its outgoing edges represent the projects that depend on it. Each node also tracks the number of incoming edges.
// 2. Initialize a build order array, once projects build order is determined add it to the array. Iterate through the array, keeping a pointer which points to the next node to be processed.
// 3. Find all the nodes with zero incoming edges and add those to the build order array. Set to be processed to the beginning of the array.
// Repeat until to be processed pointer is at the end of build array:
// 1. Read node at to be processed, if null then all the remaining nodes have a dependency and there is a cycle.
// 2. For each child of node, decrement child dependencies (number of incoming edges). If child dependencies is zero, add child to the end of build order.
// 3. Increment to be processed pointer.

// Find a correct build order
const findBuildOrder = (projects, dependencies) => {
    let graph = buildGraph(projects, dependencies);
    return orderProjects(graph.nodes);
};

// Return a list of the correct build order of the projects.
const orderProjects = projects => {
    let order = [];

    // Add roots to the build order first.
    order = addNonDependent(order, projects, 0);
    let endOfList = order.length,
        toBeProcessed = 0;

    while (toBeProcessed < order.length) {
        let current = order[toBeProcessed];

        // No remaining projects with zero dependencies
        if (current === null) return null;

        // Remove myself as a dependency.
        let children = current.children;
        for (const child of children) {
            child.dependencies -= 1;
        }

        // Add children that have no one depending on them.
        order = addNonDependent(order, children, endOfList);
        endOfList = order.length;
        toBeProcessed++;
    }
    
    return order;
};

// A helper function to insert projects with zero dependencies into the order array, starting at the index offset.
const addNonDependent = (order, projects, offset) => {
    for (const project of projects) {
        if (project.dependencies === 0) {
            order[offset] = project;
            offset++;
        }
    }

    return order;
};

// Build the graph, adding the edge (a, b) if b is dependent on a. Assumes a pair is listed in "build order". The pair (a, b) in dependencies indicates that b depends on a and a must be build before b.
const buildGraph = (projects, dependencies) => {
    let graph = new Graph();
    for (const project of projects) {
        graph.createNode(project);
    }

    for (const dependency of dependencies) {
        let [first, second] = dependency;
        graph.addEdge(first, second);
    }

    return graph;
};

class Graph {
    constructor() {
        this.nodes = [];
        this.map = {};
    }

    createNode(name) {
        if (!this.map[name]) {
            let node = new Project(name);
            this.nodes.push(node);
            this.map[name] = node;
        }

        return this.map[name];
    }

    addEdge(startName, endName) {
        let start = this.map[startName],
            end = this.map[endName];
        start.addNeighbor(end);
    }
}

class Project {
    constructor(name) {
        this.children = [];
        this.map = {};
        this.name = name;
        this.dependencies = 0; // For Solution #1
        this.state = 'BLANK'; // For Solution #2
    }

    addNeighbor(node) {
        if (!this.map[node.name]) {
            this.children.push(node);
            this.map[node.name] = node;
            node.dependencies += 1;
        }
    }
}

// Solution #2: DFS

const findBuildOrderDFS = (projects, dependencies) => {
    let graph = buildGraph(projects, dependencies);
    return orderProjectsDFS(graph.nodes);
}

const orderProjectsDFS = (projects) => {
    let stack = [];
    for (const project of projects) {
        if (project.state === 'BLANK') {
            if (!doDFS(project, stack)) return null;
        }
    }

    return stack;
}

const doDFS = (project, stack) => {
    if (project.state === 'PARTIAL') return false; // Cycle

    if (project.state === 'BLANK') {
        project.state = 'PARTIAL';
        let children = project.children;
        for (const child of children) {
            if (!doDFS(child, stack)) return false
        }
        project.state = 'COMPLETE';
        stack.push(project);
    }
    return true;
}


console.log(
    findBuildOrder(
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        [
            ['f', 'a'],
            ['f', 'b'],
            ['f', 'c'],
            ['c', 'a'],
            ['b', 'a'],
            ['b', 'e'],
            ['a', 'e'],
            ['d', 'g'],
            ['b', 'h']
        ]
    )
);
let pause;
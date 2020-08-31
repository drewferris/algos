// Given a binary tree where each node can be either positive or negative, return all paths that sum to a given value.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Solution #1: Brute Force, look at all possible paths.

const countPathsWithSum = (root, targetSum) => {
    if (root === null) return 0;

    // Count paths with sum starting from root.
    let pathsFromRoot = countPathsWithSumFromNode(root, targetSum, 0);

    // Try nodes on the left and right.
    let pathsOnLeft = countPathsWithSumFromNode(root.left, targetSum, 0),
        pathsOnRight = countPathsWithSumFromNode(root.right, targetSum, 0);

    return pathsFromRoot + pathsOnLeft + pathsOnRight;
};

// Returns the number of paths with this sum starting from this node.
const countPathsWithSumFromNode = (node, targetSum, currentSum) => {
    if (node === null) return 0;

    currentSum += node.val;

    let totalPaths = 0;
    if (currentSum === targetSum) totalPaths++; // Found a path from the root.

    totalPaths += countPathsWithSumFromNode(node.left, targetSum, currentSum);
    totalPaths += countPathsWithSumFromNode(node.right, targetSum, currentSum);
    return totalPaths;
};

// Solution #2: Optimized since there are many repeated paths in previous solution.
// Traverse through the tree with depth-first search. For each node:
//  1. Track its running sum. Taken in as a parameter and incremented by node.val.
//  2. Look up the runningSum - targetSum in the hash table. The value there indicates the total number. Set totalPaths to this value.
//  3. If runningSum === targetSum, then there is one additional path that starts at the root. Increment totalPaths.
//  4. Add runningSum to the hash table (incrementing the value if it is already there).
//  5. Recurse left and right, counting the number of paths with targetSum.
//  6. After done recursing left and right, decrement the value of runningSum in the hash table. This is backing out of our work; it reverses the changes to the hash table so that other nodes do not use it.

const countPathsWithSum2 = (root, targetSum) => {
    return countPathsWithSumFromNode2(root, targetSum, 0, {});
};

const countPathsWithSumFromNode2 = (node, targetSum, runningSum, pathCount) => {
    if (node === null) return 0; // Base case

    // Count paths with sum ending at the current node.
    runningSum += node.val;
    let sum = runningSum - targetSum,
        totalPaths = pathCount[sum] ? pathCount[sum] : 0;

    // If runningSum equals targetSum, then one additional path starts at the root.
    // Add in this path.
    if (runningSum === targetSum) totalPaths++;

    // Increment pathCount, recurse, then decrement pathCount.
    incrementHashTable(pathCount, runningSum, 1); // Increment pathCount
    totalPaths += countPathsWithSumFromNode2(node.left, targetSum, runningSum, pathCount);
    totalPaths += countPathsWithSumFromNode2(node.right, targetSum, runningSum, pathCount);
    incrementHashTable(pathCount, runningSum, -1);

    return totalPaths;
};

const incrementHashTable = (hashTable, key, delta) => {
    let newCount = (hashTable[key] ? hashTable[key] : 0) + delta;
    if (newCount === 0) { // Remove when zero to reduce space usage.
        delete hashTable[key];
    } else {
        hashTable[key] = newCount;
    }
}

let node = new Node(10);
node.left = new Node(5);
node.left.left = new Node(3);
node.left.left.left = new Node(3);
node.left.right = new Node(2);
node.left.right.right = new Node(1);
node.left.left.right = new Node(-2);
node.right = new Node(-3);
node.right.right = new Node(11);

console.log(countPathsWithSum2(node, 8));

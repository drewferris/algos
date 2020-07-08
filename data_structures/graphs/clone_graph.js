/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visited = {};

    function helper(node) {
        if (!node) return null

        if (visited[node.val]) return visited[node.val];

        let newNode = new Node(node.val);

        visited[node.val] = newNode;

        for (let child of node.neighbors) {
            newNode.neighbors.push(helper(child));
        }

        return newNode;
    }

    return helper(node);
};

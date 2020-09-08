// Imagine a robot in a r by c grid standing at the top left corner. There are certain cells that are "off limits". Design an algorithm to find a path to the bottom right corner. Note: an off limit spot, maze[r][c] would be filled with a value such that !maze[r][c] === true

// Logic: try to find ways to access (r-1, c) or (r, c-1) and recursively down working backwards.

const getPath = maze => {
    if (maze === null || !maze.length) return null;
    let path = [];

    const helper = (row, col) => {
        // If out of bounds or not available, return.
        if (col < 0 || row < 0 || !maze[row][col]) return false;

        let isAtOrigen = row === 0 && col === 0;

        // If there is a path from start to here, add my location.
        if (isAtOrigen || helper(row, col - 1) || helper(row - 1, col)) {
            path.push([row, col]);
            return true;
        }

        return false;
    };

    if (helper(maze.length - 1, maze[0].length - 1)) return path;
    return null;
};

// Solution #2: Reduce duplicated effort for squares already calculated. Now runs O(rc) time.

const getPathOpt = maze => {
    if (maze === null || !maze.length) return null;
    let path = [],
        failedPoints = {};

    const helper = (row, col) => {
        // If out of bounds or not available, return.
        if (col < 0 || row < 0 || !maze[row][col]) return false;

        if (failedPoints[[row, col]]) return false;

        let isAtOrigen = row === 0 && col === 0;

        // If there is a path from start to here, add my location.
        if (isAtOrigen || helper(row, col - 1) || helper(row - 1, col)) {
            path.push([row, col]);
            return true;
        }

        failedPoints[[row, col]] = true; // Cache result
        return false;
    };

    if (helper(maze.length - 1, maze[0].length - 1)) return path;
    return null;
};

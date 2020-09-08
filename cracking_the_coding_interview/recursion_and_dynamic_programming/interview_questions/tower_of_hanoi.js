// You have 3 towers and n disks of different sizes which can slide on to any tower. Discs are sorted in ascending order from top to bottom. Only one disc can be moved at a time, a disc is moved from the top of one tower to another, a disc cannot be placed on top of a smaller disc.  Write a program to move the discs from the first to the last tower using stacks.

// Solution: solve base case and build.
//  - tower 2 is a buffer, as n increases you will see that either extra tower is the buffer.
//  - pseudocode:

const moveDisks = (n, origin, destination, buffer) => {
    // Base case
    if (n <= 0) return;

    // Move top n-1 disks from origin to buffer, using destination as the buffer.
    moveDisks(n - 1, origin, buffer, destination);

    // Move top disc from origin to destination
    moveTop(origin, destination);

    // Move top n-1 disks from buffer to destination, using origin as buffer.
    moveDisks(n - 1, buffer, destination, origin);
};

// Real code:

const execute = n => {
    let towers = [];
    for (let i = 0; i < 3; i++) {
        towers[i] = new Tower(i);
    }

    for (let i = n - 1; i >= 0; i--) {
        towers[0].add(i);
    }

    towers[0].moveDisks(n, towers[2], towers[1]);
};

class Tower {
    constructor(i) {
        this.disks = [];
        this.index = i;
    }

    add(d) {
        if (this.disks.length && this.disks[this.disks.length - 1] <= d) {
            console.log(`Error placing disk ${d}`);
        } else {
            this.disks.push(d);
        }
    }

    moveTopTo(t) {
        const top = this.disks.pop();
        t.add(top);
    }

    moveDisks(n, destination, buffer) {
        if (n > 0) {
            this.moveDisks(n - 1, buffer, destination);
            this.moveTopTo(destination);
            buffer.moveDisks(n - 1, destination, this);
        }
    }
}

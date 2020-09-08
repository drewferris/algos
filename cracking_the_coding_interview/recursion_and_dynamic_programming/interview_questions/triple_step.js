// A child is walking up a staircase of n steps and can hop either 1, 2, or 3 steps at a time. Implement a method to count how many possible ways they can go up the stairs.

// There are three ways to get to the nth step, so we must add all the ways to get to the n - 1, n - 2 and n - 3 steps.

// Solution #1: Brute Force

const countWays = n => {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else {
        return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
    }
};

// Solution #2: Memoization

const countWaysMemo = (n, memo = []) => {
    if (n < 0) {
        return 0;
    } else if(n === 0) {
        return 1;
    } else if (memo[n]) {
        return memo[n];
    } else {
        memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo);
        return memo[n];
    }
};

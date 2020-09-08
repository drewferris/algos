// Recursive

const finbonacci =  i => {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return finbonacci(i - 1) + finbonacci(i - 2);
};

// Top-Down Dynamic Programming (or Memoization)

const fibonacciMemo = (i, memo = []) => {
    if (i === 0 || i === 1) return i;

    if (!memo[i]) memo[i] = finbonacci(i - 1, memo) + finbonacci(i - 2, memo);
    return memo[i];
};

// Bottom-Up Dynamic Programming

const fibonacciBottomUp = n => {
    if (n === 0) return 0;
    let a = 0,
        b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a + b;
};

console.log(fibonacciBottomUp(6));

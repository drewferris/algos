function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}

function fib_memo(num, memo = []) {
    if (memo[num] !== undefined) return memo[num];
    if (num <= 2) return 1;
    var res = fib_memo(num - 1) + fib_memo(num - 2);
    memo[num] = res;
    return res;
}

fib_memo(5);
// dfs
function expand(str) {
  const results = [],
    options = [];

    let i = 0;

    while (i < str.length) {
        if (str[i] === '{') {
            i++;
            const list = [];
            while (str[i] !== '}') {
                if (str[i] !== ',') list.push(str[i]);
                i++;
            }
            i++;
            list.sort();
            options.push(list);
        } else {
            options.push([str[i]]);
            i++;
        }
    }

    function dfs(start = 0, res = '') {
        if (start === options.length) {
            results.push(res);
        } else {
            for (let opt of options[start]) {
                dfs(start + 1, res + opt);
            }
        }
    }

    dfs();

    return results;
}
function removeDuplicates(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] === str[i]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.join('');
}
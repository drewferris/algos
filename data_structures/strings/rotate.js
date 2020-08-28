function rotate(str, times) {
    let c = str[0];
    for (let i = 0; i < times; i++) {
        c = getChar(c);
    }
    str[0] = c;

    for (let i = 1; i < str.length; i++) {
        c = getChar(c);
        str[i] = c;
    }

    return str;
}

function getChar(c) {
    let next = String.fromCharCode(c.charCodeAt(0) + 1);
    if (next === '[') next = 'A';
    if (next === '{') next = 'a';
    return next;
}

const result = rotate('ABC',)
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    let ht = {},
        total = 0;
    
    for (let i = 0; i < S.length - 1; i++) {
        if (!ht[i]) ht[i] = 1;
        let j = 1;
        while (S[i] === S[i + j]) {
            ht[i]++;
            j++;
        }
        i = i + j - 1;
    }
    
    let keys = Object.keys(ht);
    
    for (let word of words) {
        for (let index in ht) {
            if (word[index] !== S[index]) break;
            if (ht[index] > 1) {
                let i = 1;
                while (word[index + i] === word[index]) {
                    i++;
                }
                if (i - 1 === ht[index]) continue;
                if (i - 1 < ht[index] && ht[index] < 3) break;
                var str = new Array(ht[index] - i).join(S[index]);
                word = word.slice(0, index) + str + word.slice(index);
                if (keys.indexOf(index) === keys.length - 1) total++;
            }
        }
    }
    
    return total;
};

expressiveWords("zzzzzyyyyy", ["zzyy","zy","zyy"])
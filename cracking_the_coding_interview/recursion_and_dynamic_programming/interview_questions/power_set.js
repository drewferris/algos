// Return a method to return all the subsets of a set (the power set).

// Solution #1: Recursion. Start with the base case i.e., n = 0 which would return {} or n = 1 which would return {}, {1} and so on. How can you generate say n = 3 based on prior solutions? Look at what the difference between n = 2 and n = 3. P(3) - P(2) shows that P(2) is not in any of the subsets of P(3) that contain a_3. To create P(3), clone the subsets of P(2) and add a_3. When merged together you get P(3).

// Thus generating P(n) can be generalized from the above steps: Compute P(n-1), clone the results, and then add a_n to each of the cloned sets.

// For the purpose of this algorithm set will be an array. Note there is a bug in below algo.

const getSubsets = (set, index = 0) => {
    let allsubsets;
    if (set.length === index) { // Base case - add empty set
        allsubsets = [[]];
    } else {
        allsubsets = getSubsets(set, index + 1);
        let item = set[index],
            moresubsets = [];
        for (const subset of allsubsets) {
            let newsubset = [];
            newsubset.concat(subset);
            newsubset.push(item);
            moresubsets.push(newsubset);
        }
        allsubsets.concat(moresubsets);
    }
    return allsubsets;
}

console.log(getSubsets([1, 2]));

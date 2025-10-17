const brown = 10
const yellow = 2

function getFactorfactorPairs(n) {
    const factorPairs = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factorPairs.push([i, n / i]);
        }
    }
    return factorPairs;
}

function findMatchingPair(arr, yellow) {
    const matchingPair = [];
    for (let i = 0; i < arr.length; i++) {
        const [ width, height] = arr[i];
        if (yellow === (width - 2) * (height -2) && width >= height) matchingPair.push(...arr[i]);
    }
    return matchingPair;
}

function solution(brown, yellow) {
    const blockCount = brown + yellow;
    const factorPairs = getFactorfactorPairs(blockCount);
    return findMatchingPair(factorPairs, yellow);
}

solution(brown, yellow);
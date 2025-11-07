const elements = [7, 9, 1, 1, 4];

const solution = elements => {
    const arr = elements.concat(elements);
    const set = new Set();

    for (let i = 0; i < elements.length; i++) {
        for (let j = 1; j <= elements.length; j++) {
            let sum = 0;
            for (let k = 0; k < j; k++) {
                sum += arr[i + k];
            }
            set.add(sum);
        }
    }
    return set.size;
}

solution(elements);
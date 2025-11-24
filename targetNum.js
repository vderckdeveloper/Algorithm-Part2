const numbers = [1, 1, 1, 1, 1];
const target = 3;

const solution = (numbers, target) => {
    let result = 0;
    const queue = [];

    queue.push([0, 0]);

    while (queue.length > 0) {
        const [idx, sum] = queue.shift();

        if (idx === numbers.length) {
            if (sum === target) result++;
            continue;
        }

        queue.push([idx + 1, sum + numbers[idx]]);
        queue.push([idx + 1, sum - numbers[idx]]);
    }

    return result;
}

solution(numbers, target);
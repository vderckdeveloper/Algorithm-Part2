const x = 10;
const y = 40;
const n = 5;

const solution = (x, y, n) => {
    const vistied = new Set();
    const queue = [[x, 0]]; // [current value, count]
    vistied.add(x);

    while (queue.length) {
        const [value, count] = queue.shift();

        if (value === y) return count;

        const nextValues = [value + n, value * 2, value * 3];

        for(const next of nextValues) {
            if(next > y) continue;
            if(!vistied.has(next)) {
                vistied.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
    return -1;
}

solution(x, y, n);
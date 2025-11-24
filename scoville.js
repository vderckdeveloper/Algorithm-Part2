const scoville = [1, 2, 3, 9, 10, 12];
const K = 7;

const solution = (scoville, K) => {
    let frequency = 0;
    scoville.sort((a, b) => a - b);

    while (scoville[0] < K) {
        if (scoville.length < 2) return -1;

        const fir = scoville.shift();
        const sec = scoville.shift();
        const mixed = fir + sec * 2;
        scoville.push(mixed);
        scoville.sort((a, b) => a - b);

        frequency++;
    }
    return frequency;
}

solution(scoville, K);
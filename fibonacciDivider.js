const n = 3;

function fibonacci(n) {
    if (n === 0) return 0;
    let previousNum = 0, currentNum = 1;
    const mod = 1234567; // 문제에서 요구하는 모듈러 연산 수
    for (let i = 1; i < n; i++) {
        const sum = (previousNum + currentNum) % mod;
        previousNum = currentNum;
        currentNum = sum;
    }
    return currentNum;
}

function solution(n) {
    // condition
    if (n < 2 || n > 100000) return;

    const result = fibonacci(n);
    return result;
}

solution(n);
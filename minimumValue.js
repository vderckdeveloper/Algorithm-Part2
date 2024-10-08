const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
    // condition
    if (A.length < 1 || A.length > 1000) return;
    if (B.length < 1 || B.length > 1000) return;

    // organize A,B in aescending order and descending order
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // calculate total sum
    let totalSum = 0;
    for (let i = 0; i < A.length; i++) {
        totalSum += A[i] * B[i];
    }

    return totalSum;
}

solution(A, B);
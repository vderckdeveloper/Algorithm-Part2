const N = 8;
const A = 3;
const B = 4;

const solution = (N, A, B) => {
    let valueA = A;
    let valueB = B;
    const allMatch = Math.log2(N);
    let count = 0;
    for (let i = 0; i < allMatch; i++) {
        count += 1;
        if (Math.ceil(valueA / 2) === Math.ceil(valueB / 2)) return count;
        valueA = Math.ceil(valueA / 2);
        valueB = Math.ceil(valueB / 2);
    }
}

solution(N, A, B);
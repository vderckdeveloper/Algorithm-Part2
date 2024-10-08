const s = "1 2 3 4";

function solution(s) {
    const sArray = s.split(" ").map(num => parseInt(num));

    const maxNum = Math.max(...sArray);
    const minNum = Math.min(...sArray);

    return `${minNum} ${maxNum}`;
}

solution(s);
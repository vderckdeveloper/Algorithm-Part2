const s = "110010101001";

const solution = s => {
    let array = s.split("");
    let alterCount = 0;
    let removedZeroCount = 0;
    while (array.length > 1) {
        const originalLength = array.length;
        const filteredLength = array.filter(v => v === '1').length;
        const binary = filteredLength.toString(2);
        alterCount += 1;
        removedZeroCount += originalLength - filteredLength;
        array = binary.split("");
    }
    return [alterCount, removedZeroCount];
}

solution(s);
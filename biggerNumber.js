const n = 78;

const NumToBinary = number => number.toString(2);

const solution = n => {
    const origianlBinary = NumToBinary(n);
    const countOneFromOriginal = origianlBinary.toString().split('').filter(v => v === '1').length;
    for (let i = n + 1; ; i++) {
        const nextBinary = NumToBinary(i);
        const countOneFromNext = nextBinary.toString().split('').filter(v => v === '1').length;
        if(countOneFromOriginal === countOneFromNext) return i;
    }
}

solution(n);
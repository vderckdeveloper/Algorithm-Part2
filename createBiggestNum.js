const numbers = [3, 30, 34, 5, 9];

const solution = numbers => {
    const arr = numbers.map(v => v.toString()).sort((a,b) => parseInt(b+a) - parseInt(a+b)).join('');
    if(arr[0] === '0') return '0';
    return arr;
}

solution(numbers);
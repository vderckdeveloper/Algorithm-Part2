const s = '{{4,2,3},{3},{2,3,4,1},{2,3}}'

const strToArr = (s) => {
    const json = s
        .replace(/^{|}$/g, '')
        .replace(/}{/g, '},{')
        .replace(/{/g, '[')
        .replace(/}/g, ']');

    return JSON.parse(`[${json}]`);
};

const solution = s => {
    const arr = strToArr(s);
    arr.sort((a, b) => a.length - b.length);

    const queue = [];
    for (const element of arr) {
        for (const value of element) {
            if(!queue.includes(value)) queue.push(value);
        }
    }
    return queue;
};

solution(s);
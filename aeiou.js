const word = "AAAAE";

const solution = word => {
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    const dic = [];

    const queue = [''];  

    while (queue.length) {
        const cur = queue.shift();

        if (cur.length > 0) dic.push(cur);
        if (cur.length === 5) continue;

        for (let c of alphabet) {
            queue.push(cur + c);
        }
    }

    return dic.indexOf(word) + 1;
}

solution(word);
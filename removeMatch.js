const s = 'baabaa';

function solution(s) {
    let newS = [];
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const lastChar = newS[newS.length - 1];

        if (newS.length > 0 && lastChar === currentChar) {
            newS.pop();
        } else {
            newS.push(currentChar);
        }
    }

    return newS.length === 0 ? 1 : 0;
}

solution(s);

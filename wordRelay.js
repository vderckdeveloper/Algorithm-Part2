const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

function solution(n, words) {
    // condition
    if (n < 2 || n > 10) return;
    if (words.length < n || words.length > 100) return;

    for (let i = 0; i < words.length; i++) {
        const newArray = [...words].splice(0, i);
        const prevWord = i > 0 ? words[i - 1] : '';
        const currentWord = words[i];

        const nThPerson = (i + 1) % n === 0 ? n : (i + 1) % n;
        const order = Math.floor(newArray.length / n) + 1;

        if (i > 0 && (newArray.includes(currentWord) || currentWord[0] !== prevWord[prevWord.length - 1])) {
            return [nThPerson, order];
        }
    }

    return [0, 0];
}

solution(n, words);
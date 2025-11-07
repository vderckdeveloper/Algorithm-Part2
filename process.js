const priorities = [2, 1, 3, 2];
const location = 2;

const solution = (priorities, location) => {
    const rank = [];

    const maxNum = Math.max(...priorities);
    let maxNumIndex = priorities.indexOf(maxNum); 
    rank.push({ [maxNumIndex]: priorities[maxNumIndex] });
    priorities[maxNumIndex] = 0;

    let cursor = maxNumIndex;

    for (let i = 1; i < priorities.length; i++) {
        const maxNum = Math.max(...priorities);
        const start = (cursor + 1) % priorities.length;
        maxNumIndex = priorities.indexOf(maxNum, start);
        if (maxNumIndex === -1) maxNumIndex = priorities.indexOf(maxNum);
        rank.push({ [maxNumIndex]: priorities[maxNumIndex] });
        priorities[maxNumIndex] = 0;
        cursor = maxNumIndex; 
    }

    let index = rank.findIndex(obj => Object.keys(obj)[0] === `${location}`);
    return index + 1; 
}

solution(priorities, location);
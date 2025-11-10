const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

const solution = (k, tangerine) => {
    const countTangerineBySize = {};
    tangerine.forEach(el => {
        countTangerineBySize[el] ? countTangerineBySize[el] += 1 : countTangerineBySize[el] = 1;
    });

    let frequency = 0;
    const sizeCountsDesc = Object.values(countTangerineBySize).sort((a, b) => b - a);

    for (let i = 0; i < sizeCountsDesc.length; i++) {
        frequency += sizeCountsDesc[i];
        if (frequency >= k) return i + 1; 
    }

    return sizeCountsDesc.length;
}

solution(k, tangerine);
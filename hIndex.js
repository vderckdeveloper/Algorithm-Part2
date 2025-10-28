const citations = [10, 8, 5, 4, 3]

const solution = (citations) => {
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        const paperCount = i + 1;
        const citation = citations[i];
        if (citation < paperCount) {
            return i;
        }
    }
    return citations.length;
}

solution(citations);
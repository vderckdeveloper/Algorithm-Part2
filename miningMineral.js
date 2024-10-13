const picks = [1, 3, 2];
const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"];

function solution(picks, minerals) {
    const fatigueTable = {
        diamond: { diamond: 1, iron: 1, stone: 1 },
        iron: { diamond: 5, iron: 1, stone: 1 },
        stone: { diamond: 25, iron: 5, stone: 1 },
    };

    // Step 1: Divide minerals into groups of 5
    const groups = [];
    for (let i = 0; i < minerals.length; i += 5) {
        groups.push(minerals.slice(i, i + 5));
    }

    // Limit the number of groups to the total number of pickaxes available
    const totalPicks = picks.reduce((a, b) => a + b, 0);
    groups.splice(totalPicks);

    // Step 2: Calculate fatigue for each group with each pickaxe
    const groupFatigues = groups.map(group => {
        const fatigues = { diamond: 0, iron: 0, stone: 0 };
        for (const mineral of group) {
            fatigues.diamond += fatigueTable.diamond[mineral];
            fatigues.iron += fatigueTable.iron[mineral];
            fatigues.stone += fatigueTable.stone[mineral];
        }
        return fatigues;
    });

    // Step 3: Sort groups based on fatigue when mined with stone pickaxe
    const sortedIndices = groupFatigues
        .map((fatigue, index) => ({ index, fatigue: fatigue.stone }))
        .sort((a, b) => b.fatigue - a.fatigue)
        .map(item => item.index);

    // Step 4: Assign pickaxes to groups
    let answer = 0;
    const pickTypes = ['diamond', 'iron', 'stone'];
    for (const idx of sortedIndices) {
        let pickUsed = false;
        for (let i = 0; i < picks.length; i++) {
            if (picks[i] > 0) {
                picks[i]--;
                answer += groupFatigues[idx][pickTypes[i]];
                pickUsed = true;
                break;
            }
        }
        if (!pickUsed) break; // No pickaxes left
    }

    return answer;
}

solution(picks, minerals);
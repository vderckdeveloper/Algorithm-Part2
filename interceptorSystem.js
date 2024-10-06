const targets = [[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]];

function solution(targets) {
    // condition check
    if (targets.length < 1 || targets.length > 500000) return;

    // arrange targets in ascending order of where the missile ends
    const arrangedTargets = targets.sort((a, b) => a[1] - b[1]);

    let missileXLocation = 0;
    let missileCount = 0;

    // calculate minimum missile needed to defend
    arrangedTargets.forEach(([start, end]) => {
        if (missileXLocation <= start) {
            missileXLocation = end;
            missileCount++;
        }
    });
    
    return missileCount;
}


solution(targets);
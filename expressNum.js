const solution = n => {
    let count = 0;
    let limit = Math.ceil(n / 2);

    for (let i = 1; i <= limit; i++) {
        let sum = 0;

        for (let j = i; sum < n; j++) {
            sum+= j;

            if (sum === n) {
                count++;
                break;
            }
        }
    }

    if (n > 1) count++;
    return count;
}
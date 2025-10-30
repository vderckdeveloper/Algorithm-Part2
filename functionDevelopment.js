const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

const solution = (progresses, speeds) => {
    const days = [];
    for (i = 0; i < progresses.length; i++) {
        const daysToTake = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(daysToTake);
    }

    let cur = days[0];
    let cnt = 1;

    const answer = [];
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= cur) {
            cnt++;
        } else {
            answer.push(cnt);
            cur = days[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}

solution(progresses, speeds);

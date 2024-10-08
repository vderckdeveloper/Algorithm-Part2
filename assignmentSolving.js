const plans = [["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]];

const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
};

function solution(plans) {
    // Check the condition
    if (plans.length < 3 || plans.length > 1000) return;

    // Sort the plans in ascending order of start time
    plans.sort((a, b) => {
        const timeA = convertTimeToMinutes(a[1]);
        const timeB = convertTimeToMinutes(b[1]);
        return timeA - timeB;
    });

    const answer = [];
    const pausedTasks = [];
    let currentTime = 0;

    // Process each task one by one
    for (let i = 0; i < plans.length; i++) {
        const name = plans[i][0];
        const startTime = convertTimeToMinutes(plans[i][1]);
        const playtime = parseInt(plans[i][2]);
        const nextStartTime = i < plans.length - 1 ? convertTimeToMinutes(plans[i + 1][1]) : Infinity;

        // Handle remaining paused tasks before the new task starts
        while (pausedTasks.length > 0 && currentTime <= startTime) {
            const [pausedName, remainingTime] = pausedTasks.pop();
            if (currentTime + remainingTime <= startTime) {
                currentTime += remainingTime;
                answer.push(pausedName);
            } else {
                pausedTasks.push([pausedName, remainingTime - (startTime - currentTime)]);
                currentTime = startTime;
                break;
            }
        }

        // Start the current task and check if it can be finished
        currentTime = Math.max(currentTime, startTime);
        if (currentTime + playtime <= nextStartTime) {
            currentTime += playtime;
            answer.push(name);
        } else {
            // If the task cannot be finished, pause it and record the remaining time
            pausedTasks.push([name, currentTime + playtime - nextStartTime]);
            currentTime = nextStartTime;
        }
    }

    // Process all remaining paused tasks
    while (pausedTasks.length > 0) {
        const [pausedName, remainingTime] = pausedTasks.pop();
        currentTime += remainingTime;
        answer.push(pausedName);
    }

    return answer;
}

solution(plans);

const people = [70, 50, 80, 50];
const limit = 100;

const solution = (people, limit) => {
    people.sort((a, b) => a - b);

    let answer = 0;
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        } 
        right--;
        answer++; 
    }
    return answer;
}

solution(people, limit);
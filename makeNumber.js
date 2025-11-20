const number = '1924';
const k = 2;

const solution = (number, k) => {
    const queue = [];
    for (const digit of number) {
        while (k > 0 && queue[queue.length - 1] < digit) {
            queue.pop();
            --k;
        }
        queue.push(digit);
    }
    if(k > 0) queue.splice(queue.length - k, k);
    return queue.join('');
}
  

solution(number, k);
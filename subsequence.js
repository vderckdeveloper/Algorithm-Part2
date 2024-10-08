const sequence = [1, 2, 3, 4, 5];
const k = 7;


function solution(sequence, k) {
    const indexArray = [];
    let sum = 0;
    let left = 0;

    // Iterate through the sequence with the right pointer
    for(let right = 0; right < sequence.length; right++) {
        sum += sequence[right]; // Add the current element to the sum

        // Shrink the window from the left if the sum exceeds k
        while(sum > k && left <= right) {
            sum -= sequence[left]; // Subtract the leftmost element from the sum
            left++; // Move the left pointer to the right
        }

        // If the current sum equals k, store the indices
        if (sum === k) {
            indexArray.push([left, right]);
        }
    }

    // Sort the index pairs based on the length and starting index
    indexArray.sort((a, b) => {
        const lenA = a[1] - a[0];
        const lenB = b[1] - b[0];
        if (lenA !== lenB) return lenA - lenB; 
        return a[0] - b[0]; 
    });

    return indexArray[0]; 
}

solution(sequence, k);
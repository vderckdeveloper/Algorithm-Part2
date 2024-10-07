const r1 = 2;
const r2 = 3;

function solution(r1, r2) {
    let count = 0;
  
    // Iterate over all possible x coordinates from 1 to r2 (excluding x = 0)
    for (let x = 1; x <= r2; x++) {
      // Calculate the maximum possible y value within the larger circle (r2) for the given x
      const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
      
      // Calculate the minimum possible y value within the smaller circle (r1) for the given x
      let minY;
      if (r1 > x) {
        minY = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
      } else {
        minY = 0;
      }
      // Count the points between the two circles along the y-axis
      count += (maxY - minY + 1);
    }

    // Multiply by 4 to account for all four quadrants
    return count * 4;
  }

solution(r1, r2);